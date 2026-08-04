from fastapi.testclient import TestClient
from app.main import app


client = TestClient(app)


def test_websocket_connection():
    with client.websocket_connect("/ws") as websocket:
        websocket.send_text("hello")

        response = websocket.receive_text()

        assert response == "Received: hello"
