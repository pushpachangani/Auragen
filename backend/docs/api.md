# AuraGen Backend API Documentation

## Base URL

```
http://127.0.0.1:8000
```

---

## Health Endpoint

### GET /health

Checks whether the backend server is running.

**Response**

```json
{
  "status": "healthy"
}
```

---

## Telemetry Endpoint

### POST /telemetry

Receives user telemetry events such as mouse movement, clicks, scrolling, and keyboard interactions.

---

## Session Endpoint

### POST /session

Creates or updates a user session.

---

## Score Endpoint

### POST /score

Calculates the user's cognitive load score based on telemetry data.

---

## Generate Endpoint

### POST /generate

Generates AI-powered React UI components based on the provided prompt.

---

## Swagger Documentation

```
http://127.0.0.1:8000/docs
```