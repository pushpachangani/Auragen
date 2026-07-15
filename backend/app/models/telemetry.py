from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class MouseMovement(BaseModel):
    x: float = Field(..., description="Mouse X coordinate")
    y: float = Field(..., description="Mouse Y coordinate")
    timestamp: datetime = Field(..., description="Time of mouse movement")