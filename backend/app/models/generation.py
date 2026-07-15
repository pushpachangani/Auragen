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