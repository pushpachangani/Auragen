from fastapi import APIRouter

router = APIRouter(
    prefix="/score",
    tags=["Score"],
)


@router.post("/")
async def calculate_score():
    return {
        "message": "Score endpoint is working"
    }