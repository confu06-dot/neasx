"""
NEASX iyzico Checkout Form starter (sandbox-first).
Mount this router in your existing FastAPI main.py.
Requires: pip install iyzipay
Set environment:
IYZICO_API_KEY, IYZICO_SECRET_KEY,
IYZICO_BASE_URL=https://sandbox-api.iyzipay.com,
FRONTEND_URL=http://localhost:3000,
BACKEND_PUBLIC_URL=https://your-public-backend.example
IMPORTANT:
- This starter uses SQLite for durable pending orders.
- It deliberately does NOT deliver products. Supplier fulfillment is not implemented.
- Add authentication, rate limiting, privacy/legal checks, and provider stock/order integration before production.
"""
import json
import os
import secrets
import sqlite3
from datetime import datetime, timezone
from decimal import Decimal, InvalidOperation
from pathlib import Path
from typing import Any
from urllib.parse import quote

import iyzipay
from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import RedirectResponse
from pydantic import BaseModel, EmailStr, Field

router = APIRouter(prefix="/payments/iyzico", tags=["payments"])

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = Path(os.getenv("NEASX_ORDERS_DB", str(BASE_DIR / "orders.sqlite3")))
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000").rstrip("/")
BACKEND_PUBLIC_URL = os.getenv("BACKEND_PUBLIC_URL", "").rstrip("/")
API_KEY = os.getenv("IYZICO_API_KEY", "").strip()
SECRET_KEY = os.getenv("IYZICO_SECRET_KEY", "").strip()
BASE_URL = os.getenv("IYZICO_BASE_URL", "https://sandbox-api.iyzipay.com").rstrip("/")

def options() -> dict:
    if not API_KEY or not SECRET_KEY:
        raise HTTPException(503, "iyzico credentials are not configured")
    return {"api_key": API_KEY, "secret_key": SECRET_KEY, "base_url": BASE_URL}

def db():
    con = sqlite3.connect(DB_PATH, timeout=15)
    con.row_factory = sqlite3.Row
    return con

def init_db():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    with db() as con:
        con.execute("""
        CREATE TABLE IF NOT EXISTS store_orders (
            order_id TEXT PRIMARY KEY,
            product_id TEXT NOT NULL,
            product_name TEXT NOT NULL,
            buyer_email TEXT NOT NULL,
            amount TEXT NOT NULL,
            currency TEXT NOT NULL DEFAULT 'TRY',
            status TEXT NOT NULL DEFAULT 'pending',
            payment_token TEXT UNIQUE,
            conversation_id TEXT NOT NULL UNIQUE,
            provider_payment_id TEXT,
            created_at TEXT NOT NULL,
            paid_at TEXT,
            last_payment_result TEXT
        )""")
init_db()

class CheckoutRequest(BaseModel):
    product_id: int
    name: str = Field(min_length=1, max_length=80)
    surname: str = Field(min_length=1, max_length=80)
    email: EmailStr
    phone: str = Field(min_length=10, max_length=20)
    identity_number: str = Field(pattern=r"^\d{11}$")
    address: str = Field(min_length=8, max_length=400)
    city: str = Field(min_length=2, max_length=60)
    country: str = Field(default="Turkey", min_length=2, max_length=60)
    zip_code: str = Field(default="00000", min_length=3, max_length=12)

def decimal_price(product: dict[str, Any]) -> Decimal:
    raw = product.get("amount", product.get("price"))
    try:
        value = Decimal(str(raw))
    except (InvalidOperation, TypeError):
        raise HTTPException(502, "Provider returned an invalid product price")
    if not value.is_finite() or value <= 0 or value.as_tuple().exponent < -2:
        raise HTTPException(400, "Invalid product price")
    return value.quantize(Decimal("0.01"))

async def load_product(product_id: int) -> dict:
    """
    Adapter: existing main.py exposes GET /catalog and product records.
    Better replace this with a provider single-product lookup once confirmed.
    """
    import httpx
    # Internal catalog URL; avoids a public self-call but repeats catalog fetch.
    async with httpx.AsyncClient(timeout=30) as client:
        try:
            r = await client.get(f"http://127.0.0.1:8000/catalog")
            r.raise_for_status()
            payload = r.json()
        except Exception as exc:
            raise HTTPException(502, "Unable to validate product with catalog") from exc
    for item in payload.get("products", []):
        if str(item.get("id")) == str(product_id):
            return item
    raise HTTPException(404, "Product not found")

def stock_available(product: dict) -> bool:
    if product.get("is_stock") is False:
        return False
    count = product.get("stock_count")
    if count is not None:
        try:
            return Decimal(str(count)) > 0
        except Exception:
            return False
    return product.get("is_stock") is True

@router.post("/checkout")
async def start_checkout(body: CheckoutRequest, request: Request):
    if not BACKEND_PUBLIC_URL.startswith("https://"):
        raise HTTPException(503, "Set BACKEND_PUBLIC_URL to public HTTPS backend URL")
    product = await load_product(body.product_id)
    if not stock_available(product):
        raise HTTPException(409, "Product is out of stock")
    price = decimal_price(product)
    # No frontend-supplied price is accepted. Re-read provider data here.
    order_id = secrets.token_urlsafe(18)
    conversation_id = secrets.token_hex(16)
    name = str(product.get("name") or product.get("title") or f"Product {body.product_id}")[:200]
    amount = format(price, ".2f")
    try:
        with db() as con:
            con.execute("""INSERT INTO store_orders
                (order_id,product_id,product_name,buyer_email,amount,currency,status,conversation_id,created_at)
                VALUES (?,?,?,?,?,'TRY','pending',?,?)""",
                (order_id, str(body.product_id), name, str(body.email), amount,
                 conversation_id, datetime.now(timezone.utc).isoformat()))
    except sqlite3.Error as exc:
        raise HTTPException(500, "Could not create order") from exc

    addr = {
        "contactName": f"{body.name} {body.surname}",
        "city": body.city, "country": body.country,
        "address": body.address, "zipCode": body.zip_code
    }
    buyer = {
        "id": order_id, "name": body.name, "surname": body.surname,
        "email": str(body.email), "gsmNumber": body.phone,
        "identityNumber": body.identity_number,
        "registrationAddress": body.address, "city": body.city,
        "country": body.country, "zipCode": body.zip_code,
        "ip": request.client.host if request.client else "127.0.0.1",
        "registrationDate": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "lastLoginDate": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }
    item = {
        "id": str(body.product_id), "name": name[:100],
        "category1": str(product.get("category") or "Digital Product")[:50],
        "category2": str(product.get("subcategory") or "Digital")[:50],
        "itemType": "VIRTUAL", "price": amount,
    }
    data = {
        "locale": "tr", "conversationId": conversation_id,
        "price": amount, "paidPrice": amount, "currency": "TRY",
        "basketId": order_id, "paymentGroup": "PRODUCT",
        "callbackUrl": f"{BACKEND_PUBLIC_URL}/payments/iyzico/callback",
        "enabledInstallments": [1],
        "buyer": buyer, "shippingAddress": addr,
        "billingAddress": addr, "basketItems": [item],
    }
    try:
        result = iyzipay.CheckoutFormInitialize().create(data, options())
        result = json.loads(result.read().decode("utf-8"))
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(502, "Could not initialize iyzico checkout") from exc
    if result.get("status") != "success" or not result.get("token"):
        with db() as con:
            con.execute("UPDATE store_orders SET status='init_failed',last_payment_result=? WHERE order_id=?",
                        (json.dumps({"error": result.get("errorMessage", "initialize failed")})[:2000], order_id))
        raise HTTPException(502, "Payment session could not be created")
    token = str(result["token"])
    with db() as con:
        con.execute("UPDATE store_orders SET payment_token=? WHERE order_id=?", (token, order_id))
    page_url = result.get("paymentPageUrl")
    if not page_url:
        # CF script can be embedded only with a trusted integration approach.
        raise HTTPException(502, "iyzico did not return a hosted payment URL")
    return {"order_id": order_id, "checkout_url": page_url}

@router.post("/callback")
async def checkout_callback(request: Request):
    form = await request.form()
    token = str(form.get("token") or "").strip()
    if not token:
        raise HTTPException(400, "Missing payment token")
    with db() as con:
        row = con.execute("SELECT * FROM store_orders WHERE payment_token=?", (token,)).fetchone()
    if not row:
        raise HTTPException(404, "Order not found")
    try:
        result = iyzipay.CheckoutForm().retrieve(
            {"locale": "tr", "conversationId": row["conversation_id"], "token": token},
            options()
        )
        result = json.loads(result.read().decode("utf-8"))
    except Exception as exc:
        raise HTTPException(502, "Could not verify payment result") from exc

    # Mark paid only from server-to-server retrieve response and matching transaction.
    success = (
        result.get("status") == "success"
        and str(result.get("paymentStatus", "")).upper() == "SUCCESS"
        and str(result.get("basketId", "")) == row["order_id"]
    )
    try:
        paid = Decimal(str(result.get("paidPrice", "NaN"))).quantize(Decimal("0.01"))
        expected = Decimal(row["amount"]).quantize(Decimal("0.01"))
        success = success and paid == expected and str(result.get("currency", "TRY")) == "TRY"
    except Exception:
        success = False

    # SQLite transaction guards duplicate callbacks; fulfillment must be a separate idempotent worker.
    with db() as con:
        current = con.execute("SELECT status FROM store_orders WHERE order_id=?", (row["order_id"],)).fetchone()
        if current and current["status"] != "paid":
            status = "paid" if success else "failed"
            con.execute("""UPDATE store_orders SET status=?,provider_payment_id=?,paid_at=?,
                last_payment_result=? WHERE order_id=? AND status='pending'""",
                (status, str(result.get("paymentId") or ""), datetime.now(timezone.utc).isoformat() if success else None,
                 json.dumps({"paymentStatus": result.get("paymentStatus"), "errorCode": result.get("errorCode")})[:2000],
                 row["order_id"]))
    destination = "success" if success else "failed"
    return RedirectResponse(f"{FRONTEND_URL}/payment/result?status={destination}&order={quote(row['order_id'])}", status_code=303)

@router.get("/orders/{order_id}")
async def order_status(order_id: str):
    # Temporary guest-access status endpoint. Use random hard-to-guess order IDs;
    # production should add owner auth or a separate unguessable status secret.
    with db() as con:
        row = con.execute("SELECT order_id,product_name,amount,currency,status,created_at,paid_at FROM store_orders WHERE order_id=?",
                          (order_id,)).fetchone()
    if not row:
        raise HTTPException(404, "Order not found")
    return dict(row)
