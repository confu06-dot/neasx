
import os
import asyncio
from pathlib import Path
from typing import Any

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from iyzico_payments import router as iyzico_router

app.include_router(iyzico_router)


# --------------------------------------------------
# ENV
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env", override=False)

API_BASE = os.getenv(
    "UNIQUE_API_BASE",
    "https://bayi.uniquelisans.com/api"
).strip().rstrip("/")

API_KEY = os.getenv("UNIQUE_API_KEY", "").strip()

CORS_ORIGINS = [
    origin.strip()
    for origin in os.getenv(
        "CORS_ORIGINS",
        "http://localhost:3000"
    ).split(",")
    if origin.strip()
]


# --------------------------------------------------
# APP
# --------------------------------------------------

app = FastAPI(
    title="NEASX Store API",
    version="0.3.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization"],
)


# --------------------------------------------------
# PROVIDER
# --------------------------------------------------

async def provider_get(
    path: str,
    params: dict[str, Any] | None = None
) -> dict[str, Any]:

    if not API_KEY:
        raise HTTPException(
            status_code=503,
            detail="Provider API key is not configured"
        )

    try:
        async with httpx.AsyncClient(timeout=20) as client:
            response = await client.get(
                f"{API_BASE}{path}",
                params={
                    **(params or {}),
                    "key": API_KEY,
                },
            )

            response.raise_for_status()
            data = response.json()

            if not isinstance(data, dict):
                raise HTTPException(
                    status_code=502,
                    detail="Invalid provider response"
                )

            return data

    except httpx.HTTPStatusError as exc:
        print(
            "Provider HTTP error:",
            exc.response.status_code,
            path
        )

        raise HTTPException(
            status_code=502,
            detail="Provider request failed"
        ) from exc

    except httpx.RequestError as exc:
        print(
            "Provider connection error:",
            type(exc).__name__
        )

        raise HTTPException(
            status_code=502,
            detail="Provider connection failed"
        ) from exc

    except ValueError as exc:
        raise HTTPException(
            status_code=502,
            detail="Invalid provider JSON"
        ) from exc


# --------------------------------------------------
# HEALTH
# --------------------------------------------------

@app.get("/health")
async def health():
    return {
        "status": "ok",
        "provider_key_configured": bool(API_KEY),
    }


# --------------------------------------------------
# CATALOG
# --------------------------------------------------

@app.get("/catalog")
async def catalog():

    cats = await provider_get("/categories")
    category_list = cats.get("categories", [])

    if not isinstance(category_list, list):
        raise HTTPException(
            status_code=502,
            detail="Invalid categories response"
        )

    jobs = []

    for cat in category_list:
        if not isinstance(cat, dict):
            continue

        subcategories = cat.get("subcategories", [])

        if not isinstance(subcategories, list):
            continue

        for sub in subcategories:
            if not isinstance(sub, dict):
                continue

            jobs.append((
                cat.get("name", ""),
                sub.get("name", ""),
                sub.get("id"),
                cat.get("id"),
            ))

    semaphore = asyncio.Semaphore(5)

    async def load(item):
        cname, sname, sid, cid = item

        async with semaphore:
            try:
                data = await provider_get(
                    "/products",
                    {
                        "category_id": cid,
                        "sub_category_id": sid,
                    }
                )

                product_list = data.get("products", [])

                if not isinstance(product_list, list):
                    return []

                result = []

                for product in product_list:
                    if not isinstance(product, dict):
                        continue

                    result.append({
                        **product,
                        "category": cname,
                        "subcategory": sname,
                    })

                return result

            except HTTPException as exc:
                print(
                    "Subcategory skipped:",
                    sid,
                    "status:",
                    exc.status_code
                )
                return []

        # Semaphore otomatik serbest bırakılır.

    lists = await asyncio.gather(
        *(load(item) for item in jobs)
    )

    products = [
        product
        for group in lists
        for product in group
    ]

    return {
        "categories": category_list,
        "products": products,
    }


# --------------------------------------------------
# PRODUCT DETAIL
# --------------------------------------------------

@app.get("/products/{product_id}")
async def product_detail(product_id: int):

    # Ürünü katalog içerisinden bul.
    data = await catalog()

    for product in data.get("products", []):
        if str(product.get("id")) == str(product_id):
            return product

    raise HTTPException(
        status_code=404,
        detail="Product not found"
    )


# --------------------------------------------------
# BALANCE
# --------------------------------------------------

@app.get("/balance")
async def balance():
    raise HTTPException(
        status_code=403,
        detail="Admin-only endpoint is not enabled"
    )
