from app.models.telemetry import MouseMovement
from app.models.cognitive import CognitiveLoadScore


class ScoreService:
    """Service for calculating cognitive load scores."""

    @staticmethod
    def calculate_cursor_speed(
        previous: MouseMovement,
        current: MouseMovement,
    ) -> float:
        """
        Calculate cursor movement speed.
        """
        dx = current.x - previous.x
        dy = current.y - previous.y

        distance = (dx ** 2 + dy ** 2) ** 0.5

        time_difference = (
            current.timestamp - previous.timestamp
        ).total_seconds()

        if time_difference <= 0:
            return 0.0

        return distance / time_difference

    @staticmethod
    def calculate_hesitation_time(
        previous: MouseMovement,
        current: MouseMovement,
    ) -> float:
        """
        Calculate hesitation time between mouse events.
        """
        return (
            current.timestamp - previous.timestamp
        ).total_seconds()