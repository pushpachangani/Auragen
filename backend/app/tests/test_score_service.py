from datetime import datetime, timedelta

from app.models.telemetry import MouseMovement, ClickEvent
from app.services.score_service import ScoreService


def test_calculate_cursor_speed():
    previous = MouseMovement(
        x=0,
        y=0,
        timestamp=datetime.now()
    )

    current = MouseMovement(
        x=3,
        y=4,
        timestamp=previous.timestamp + timedelta(seconds=1)
    )

    speed = ScoreService.calculate_cursor_speed(previous, current)

    assert speed == 5.0


def test_calculate_hesitation_time():
    previous = MouseMovement(
        x=0,
        y=0,
        timestamp=datetime.now()
    )

    current = MouseMovement(
        x=0,
        y=0,
        timestamp=previous.timestamp + timedelta(seconds=2)
    )

    hesitation = ScoreService.calculate_hesitation_time(
        previous,
        current,
    )

    assert hesitation == 2.0


def test_detect_rage_clicks():
    now = datetime.now()

    clicks = [
        ClickEvent(x=10, y=10, button="left", timestamp=now),
        ClickEvent(x=10, y=10, button="left", timestamp=now),
        ClickEvent(x=10, y=10, button="left", timestamp=now),
    ]

    result = ScoreService.detect_rage_clicks(clicks)

    assert result == 3


def test_normalize_score():
    assert ScoreService.normalize_score(120) == 100
    assert ScoreService.normalize_score(-10) == 0
    assert ScoreService.normalize_score(55) == 55


def test_evaluate_threshold():
    assert ScoreService.evaluate_threshold(20) == "low"
    assert ScoreService.evaluate_threshold(50) == "medium"
    assert ScoreService.evaluate_threshold(90) == "high"


def test_calculate_score():
    result = ScoreService.calculate_score(
        cursor_speed=25,
        hesitation_time=2,
        rage_clicks=3,
    )

    assert result.score >= 0
    assert result.risk_level in [
        "low",
        "medium",
        "high",
    ]