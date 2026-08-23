from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

from services.supabase_client import get_supabase_admin

bearer_scheme = HTTPBearer(auto_error=False)


def require_admin(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)):
    if not credentials:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Authentication required")

    supabase = get_supabase_admin()
    try:
        user_response = supabase.auth.get_user(credentials.credentials)
        user = user_response.user
    except Exception as error:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid authentication token") from error

    profile_response = (
        supabase.table("profiles")
        .select("role")
        .eq("id", user.id)
        .single()
        .execute()
    )
    if not profile_response.data or profile_response.data.get("role") != "admin":
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Admin access required")

    return user
