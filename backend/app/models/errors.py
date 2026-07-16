from pydantic import BaseModel


class ErrorResponse(BaseModel):
    success: bool = False
    error: str
    details: list | None = None 