from fastapi import APIRouter

router = APIRouter(prefix="/consultations", tags=["consultations"])

@router.get("/health")
def consultations_health():
    return {"status": "ok", "module": "consultations"}
