from typing import Any, List, Optional

from pydantic import BaseModel


class SuccessResponse(BaseModel):
    success: bool = True
    message: str
    data: Optional[Any] = None


class ErrorResponse(BaseModel):
    success: bool = False
    error: str
    details: Optional[Any] = None


class StatusResponse(BaseModel):
    status: str
    version: Optional[str] = None


class MessageResponse(BaseModel):
    message: str


class PaginationResponse(BaseModel):
    total: int
    page: int
    page_size: int
    items: List[Any]