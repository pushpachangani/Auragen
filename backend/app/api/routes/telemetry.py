from fastapi import APIRouter

from app.models.responses import SuccessResponse
from app.models.telemetry import TelemetryEvent
from app.services.telemetry_service import TelemetryService

router = APIRouter(prefix="/telemetry", tags=["Telemetry"])


@router.post("/", response_model=SuccessResponse)
async def receive_telemetry(event: TelemetryEvent):
    """
    Receive telemetry data from the frontend.
    """

    return TelemetryService.process_event(event) 