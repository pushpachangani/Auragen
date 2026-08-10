# dashboard.py

from fastapi import APIRouter

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/stats")
async def get_dashboard_stats():
    return {
        "activeUsers": 1254,
        "sessions": 842,
        "frustrationRate": "18%",
        "generatedComponents": 76
    } 