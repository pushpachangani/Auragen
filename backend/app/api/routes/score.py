from fastapi import APIRouter, HTTPException

from app.models.cognitive import CognitiveLoadScore
from app.services.score_service import ScoreService

router = APIRouter(
    prefix="/score",
    tags=["Score"],
)

score_service = ScoreService()


@router.post(
    "/",
    response_model=CognitiveLoadScore,
)
async def calculate_score(score_data: CognitiveLoadScore):
    try:
        result = score_service.calculate_score(
            cursor_speed=score_data.cursor_speed,
            hesitation_time=score_data.hesitation_time,
            rage_clicks=score_data.rage_clicks,
        )

        return result

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )