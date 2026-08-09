from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.settings import settings
from app.core.exceptions import register_exception_handlers
from app.api.routes import (
    dashboard,
    generate,
    health,
    score,
    session,
    telemetry,
    websocket,
)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

register_exception_handlers(app)


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
app.include_router(dashboard.router)
app.include_router(websocket.router)
