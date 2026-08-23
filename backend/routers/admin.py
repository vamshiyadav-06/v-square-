from fastapi import APIRouter, Depends

from services.supabase_client import get_supabase_admin
from utils.auth import require_admin

router = APIRouter(prefix="/admin", tags=["admin"])

@router.get("/health")
def admin_health():
    return {"status": "ok", "module": "admin"}


@router.get("/students")
def list_students(_user=Depends(require_admin)):
    response = (
        get_supabase_admin()
        .table("profiles")
        .select("id, full_name, email, phone, college, course, branch, year, city, created_at")
        .eq("role", "student")
        .order("created_at", desc=True)
        .execute()
    )
    return {"students": response.data or []}
