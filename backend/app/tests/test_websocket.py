import json
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_websocket_connection():
    with client.websocket_connect("/ws") as websocket:
        # Test error handling on invalid JSON
        websocket.send_text("hello")
        response = websocket.receive_json()
        assert response["type"] == "error"

        # Test valid telemetry flow
        payload = {
            "type": "telemetry",
            "metrics": {
                "cursor_speed": 12.5,
                "hesitation_time": 1.2,
                "rage_clicks": 0
            },
            "current_context": {
                "current_field": "Employee ID",
                "entered_data": {}
            }
        }
        websocket.send_json(payload)
        response_data = websocket.receive_json()
        assert response_data["type"] == "score_update"
        assert "score" in response_data
