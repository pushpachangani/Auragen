from app.models.telemetry import TelemetryEvent


class TelemetryService:
    """Service for processing telemetry events."""

    @staticmethod
    def process_event(event: TelemetryEvent) -> dict:
        """
        Process a telemetry event and return a summary.
        """

        return {
            "success": True,
            "event_type": event.event_type,
            "timestamp": event.timestamp,
            "message": "Telemetry event processed successfully",
        } 