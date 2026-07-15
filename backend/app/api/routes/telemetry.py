from fastapi import APIRouter

from app.models.responses import SuccessResponse
from app.models.telemetry import TelemetryEvent

router = APIRouter(prefix="/telemetry", tags=["Telemetry"])


@router.post("/", response_model=SuccessResponse)
async def receive_telemetry(event: TelemetryEvent):
    """
    Receive telemetry data from the frontend.
    """

    return SuccessResponse(
        message="Telemetry received successfully",
        data=event.model_dump(),
    )