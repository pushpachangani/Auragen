from app.models.cognitive import (
    CognitiveLoadScore,
    ThresholdConfig,
    RiskLevel,
)
from app.models.generation import GenerationRequest
from app.models.responses import SuccessResponse


def test_cognitive_load_score():
    score = CognitiveLoadScore(
        score=75,
        risk_level="high",
        cursor_speed=250.0,
        hesitation_time=1.5,
        rage_clicks=5,
    )

    assert score.score == 75
    assert score.risk_level == "high"
    assert score.cursor_speed == 250.0
    assert score.hesitation_time == 1.5
    assert score.rage_clicks == 5


def test_threshold_config():
    config = ThresholdConfig()

    assert config.low == 30.0
    assert config.medium == 70.0
    assert config.high == 100.0


def test_risk_level():
    risk = RiskLevel(level="medium")

    assert risk.level == "medium"


def test_generation_request():
    request = GenerationRequest(
        prompt="Generate login page",
        session_id="session_001",
    )

    assert request.prompt == "Generate login page"
    assert request.session_id == "session_001"


def test_success_response():
    response = SuccessResponse(
        success=True,
        message="Success"
    )

    assert response.success is True
    assert response.message == "Success"