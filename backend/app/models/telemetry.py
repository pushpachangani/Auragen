from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class MouseMovement(BaseModel):
    x: float = Field(..., description="Mouse X coordinate")
    y: float = Field(..., description="Mouse Y coordinate")
    timestamp: datetime = Field(..., description="Time of mouse movement")


class ClickEvent(BaseModel):
    x: float = Field(..., description="Mouse click X coordinate")
    y: float = Field(..., description="Mouse click Y coordinate")
    button: str = Field(..., description="Mouse button clicked")
    timestamp: datetime = Field(..., description="Time of click event")

class ScrollEvent(BaseModel):
    scroll_x: float = Field(..., description="Horizontal scroll position")
    scroll_y: float = Field(..., description="Vertical scroll position")
    timestamp: datetime = Field(..., description="Time of scroll event")

class KeyboardEvent(BaseModel):
    key: str = Field(..., description="Key pressed")
    event_type: str = Field(..., description="Key event type (keydown/keyup)")
    timestamp: datetime = Field(..., description="Time of keyboard event")

class TelemetryEvent(BaseModel):
    mouse: Optional[MouseMovement] = None
    click: Optional[ClickEvent] = None
    scroll: Optional[ScrollEvent] = None
    keyboard: Optional[KeyboardEvent] = None

class UserSession(BaseModel):
    session_id: str = Field(..., description="Unique session identifier")
    user_id: Optional[str] = Field(
        default=None,
        description="Optional user identifier"
    )
    started_at: datetime = Field(
        ...,
        description="Session start time"
    )
    ended_at: Optional[datetime] = Field(
        default=None,
        description="Session end time"
    )