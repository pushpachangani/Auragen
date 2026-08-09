from pydantic import BaseModel, Field

class RiskLevel(BaseModel):
    level: str = Field(
        ...,
        description="Current cognitive load risk level"
    )

class ThresholdConfig(BaseModel):
    low: float = Field(
        default=30.0,
        description="Maximum score for low cognitive load"
    )
    medium: float = Field(
        default=70.0,
        description="Maximum score for medium cognitive load"
    )
    high: float = Field(
        default=100.0,
        description="Maximum score for high cognitive load"
    )

class CognitiveLoadScore(BaseModel):
    score: float = Field(
        ...,
        ge=0,
        le=100,
        description="Normalized cognitive load score"
    )
    risk_level: str = Field(
        ...,
        description="Calculated risk level"
    )
    cursor_speed: float = Field(
        default=0.0,
        description="Average cursor speed"
    )
    hesitation_time: float = Field(
        default=0.0,
        description="Average hesitation time in seconds"
    )
    rage_clicks: int = Field(
        default=0,
        description="Number of rage clicks detected"
    )

class ScoreCalculationRequest(BaseModel):
    cursor_speed: float = Field(
        default=0.0,
        description="Average cursor speed"
    )
    hesitation_time: float = Field(
        default=0.0,
        description="Average hesitation time in seconds"
    )
    rage_clicks: int = Field(
        default=0,
        description="Number of rage clicks detected"
    )

class ScoreSummary(BaseModel):
    session_id: str = Field(
        ...,
        description="User session ID"
    )
    cognitive_score: CognitiveLoadScore
    threshold: ThresholdConfig