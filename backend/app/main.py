from fastapi import FastAPI

from app.config.settings import settings
from app.core.exceptions import register_exception_handlers
from app.api.routes import (
    generate,
    health,
    score,
    session,
    telemetry,
)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)


@app.get("/")
def home():
    return {
        "message": "Welcome to AuraGen Backend 🚀",
        "project": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "debug": settings.DEBUG,
    }


app.include_router(health.router)
app.include_router(telemetry.router)
app.include_router(session.router)
app.include_router(score.router)
app.include_router(generate.router)