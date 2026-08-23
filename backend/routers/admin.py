from fastapi import APIRouter

router = APIRouter(prefix="/admin", tags=["admin"])

@router.get("/health")
def admin_health():
    return {"status": "ok", "module": "admin"}
