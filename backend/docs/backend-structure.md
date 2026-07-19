# Backend Folder Structure

```
backend/
│
├── app/
│   ├── api/
│   │   └── routes/
│   │       ├── generate.py
│   │       ├── health.py
│   │       ├── score.py
│   │       ├── session.py
│   │       └── telemetry.py
│   │
│   ├── config/
│   │   ├── __init__.py
│   │   └── settings.py
│   │
│   ├── core/
│   │   ├── exceptions.py
│   │   └── __init__.py
│   │
│   ├── models/
│   │   ├── cognitive.py
│   │   ├── generation.py
│   │   ├── responses.py
│   │   ├── telemetry.py
│   │   └── errors.py
│   │
│   ├── services/
│   │   ├── generation_service.py
│   │   ├── score_service.py
│   │   ├── session_service.py
│   │   └── telemetry_service.py
│   │
│   ├── tests/
│   │   ├── test_health.py
│   │   └── test_models.py
│   │
│   └── main.py
│
├── docs/
│   ├── api.md
│   └── backend-structure.md
│
├── README.md
└── requirements.txt
```

## Description

- **api/** → REST API endpoints
- **config/** → Application configuration and settings
- **core/** → Global exception handling and core utilities
- **models/** → Pydantic request and response schemas
- **services/** → Business logic and cognitive load calculations
- **tests/** → Unit tests for APIs and models
- **docs/** → Project documentation 