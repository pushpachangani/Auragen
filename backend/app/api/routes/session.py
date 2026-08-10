from fastapi import APIRouter

router = APIRouter(
    prefix="/session",
    tags=["Session"],
)


@router.post("/")
async def create_session():
    return {
        "message": "Session endpoint is working"
    }