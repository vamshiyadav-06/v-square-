from fastapi import APIRouter

router = APIRouter(prefix="/referrals", tags=["referrals"])

@router.get("/health")
def referrals_health():
    return {"status": "ok", "module": "referrals"}
