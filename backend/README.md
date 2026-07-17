# AuraGen Backend

## Overview

AuraGen Backend is built using FastAPI and provides APIs for telemetry collection, cognitive load scoring, session management, and AI-based code generation.

---

## Tech Stack

- Python 3.14
- FastAPI
- Pydantic
- Uvicorn
- Pytest

---

## Project Structure

backend/
│
├── app/
│ ├── api/
│ ├── config/
│ ├── core/
│ ├── models/
│ ├── services/
│ ├── tests/
│ └── main.py
│
├── requirements.txt
└── README.md

---

## Installation

Create virtual environment

```bash
python -m venv .venv
```

Activate

Windows

```bash
.venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

## Run the Server

```bash
uvicorn app.main:app --reload
```

Server URL

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## Run Tests

```bash
python -m pytest
```

or

```bash
python -m pytest app/tests
```

---

## Available APIs

- GET /health
- POST /telemetry
- POST /session
- POST /score
- POST /generate

---

## Author

AuraGen Development Team 