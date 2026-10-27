# NEASX Store — starter

Premium dark marketplace UI scaffold using Next.js + a FastAPI provider adapter.

## Frontend
```bash
npm install
cp .env.example .env.local
npm run dev
```
Set `BACKEND_URL=http://localhost:8000` in `.env.local`.

## Backend
```bash
cd backend
python -m venv .venv
# Activate venv, then:
pip install -r requirements.txt
cp .env.example .env
# Put a newly rotated provider key into backend/.env
uvicorn main:app --reload --port 8000
```

## Important before real sales
- This is a UI + catalog integration starter, not a production checkout.
- Provider API key must stay only in backend environment.
- Confirm resale/license terms and provider catalog prices/stock.
- Add authenticated customer accounts, verified payment webhooks, idempotent order creation, order storage, refunds/support and abuse protection before enabling checkout.
- Never publicly expose provider balance or order credentials.
- Product prices shown in mock cards are visual placeholders, not verified offers.
