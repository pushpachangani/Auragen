from app.models.cognitive import CognitiveLoadScore
from app.models.telemetry import ClickEvent, MouseMovement


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

        distance = (dx**2 + dy**2) ** 0.5

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

    @staticmethod
    def detect_rage_clicks(
        clicks: list[ClickEvent],
    ) -> int:
        """
        Detect rage clicks based on repeated clicks.
        """
        if len(clicks) < 3:
            return 0

        return len(clicks)

    @staticmethod
    def normalize_score(score: float) -> float:
        """
        Normalize score between 0 and 100.
        """
        return max(0.0, min(score, 100.0))

    @staticmethod
    def evaluate_threshold(score: float) -> str:
        """
        Evaluate cognitive load risk level.
        """
        if score < 30:
            return "low"
        elif score < 70:
            return "medium"
        else:
            return "high"

    @staticmethod
    def calculate_score(
        cursor_speed: float,
        hesitation_time: float,
        rage_clicks: int,
    ) -> CognitiveLoadScore:
        """
        Calculate overall cognitive load score.
        """

        score = (
            cursor_speed * 0.4
            + hesitation_time * 20
            + rage_clicks * 10
        )

        normalized_score = ScoreService.normalize_score(score)

        return CognitiveLoadScore(
            score=normalized_score,
            risk_level=ScoreService.evaluate_threshold(normalized_score),
            cursor_speed=cursor_speed,
            hesitation_time=hesitation_time,
            rage_clicks=rage_clicks,
        )