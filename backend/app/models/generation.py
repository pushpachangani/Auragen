from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field

class GenerationRequest(BaseModel):
    prompt: str = Field(
        ...,
        description="Prompt sent to the AI model"
    )
    session_id: str = Field(
        ...,
        description="User session identifier"
    )

class GeneratedComponent(BaseModel):
    component_name: str = Field(
        ...,
        description="Generated React component name"
    )
    code: str = Field(
        ...,
        description="Generated component source code"
    )
    language: str = Field(
        default="React",
        description="Programming language or framework"
    )

class PromptMetadata(BaseModel):
    model_name: str = Field(
        ...,
        description="AI model used for generation"
    )
    generated_at: datetime = Field(
        default_factory=datetime.utcnow,
        description="Time when the response was generated"
    )
    processing_time: Optional[float] = Field(
        default=None,
        description="Generation time in seconds"
    )

class GenerationResponse(BaseModel):
    success: bool = Field(
        default=True,
        description="Whether generation was successful"
    )
    message: str = Field(
        ...,
        description="Generation status message"
    )
    component: GeneratedComponent
    metadata: PromptMetadata