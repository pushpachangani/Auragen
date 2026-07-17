from fastapi import APIRouter

router = APIRouter(
    prefix="/generate",
    tags=["Generate"],
)


@router.post("/")
async def generate_component():
    return {
        "message": "Generate endpoint is working"
    }