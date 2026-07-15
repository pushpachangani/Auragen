from fastapi import FastAPI

app = FastAPI(
    title="AuraGen Backend",
    description="Backend API for AuraGen - Self-Healing Generative UI",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "project": "AuraGen",
        "status": "Backend Running Successfully",
        "version": "1.0.0"
    }