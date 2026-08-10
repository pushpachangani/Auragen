import json
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.services.score_service import ScoreService
from app.services.generation_service import GenerateService

router = APIRouter()


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("WebSocket client connected")

    # Store trigger state for this socket connection
    adaptation_triggered = False

    try:
        while True:
            message_text = await websocket.receive_text()
            try:
                message = json.loads(message_text)
            except json.JSONDecodeError:
                await websocket.send_json({
                    "type": "error",
                    "message": "Invalid JSON payload"
                })
                continue

            msg_type = message.get("type")

            if msg_type == "telemetry":
                metrics = message.get("metrics", {})
                current_context = message.get("current_context", {})
                current_field = current_context.get("current_field", "")
                entered_data = current_context.get("entered_data", {})

                # Extract metric variables for scoring
                cursor_speed = float(metrics.get("cursor_speed", 0.0))
                hesitation_time = float(metrics.get("hesitation_time", 0.0))
                rage_clicks = int(metrics.get("rage_clicks", 0))

                # Calculate score using backend ScoreService
                score_obj = ScoreService.calculate_score(
                    cursor_speed=cursor_speed,
                    hesitation_time=hesitation_time,
                    rage_clicks=rage_clicks
                )

                # Send live score updates to client
                await websocket.send_json({
                    "type": "score_update",
                    "score": score_obj.score,
                    "risk_level": score_obj.risk_level
                })

                # Automatically trigger adaptation when score is High (>= 70)
                if score_obj.score >= 70 and not adaptation_triggered:
                    adaptation_triggered = True
                    print(f"Cognitive load threshold crossed (Score: {score_obj.score}). Triggering AI adaptation.")

                    # Notify frontend that generation is starting (renders loading spinner)
                    await websocket.send_json({
                        "type": "adaptation_started"
                    })

                    # Run generation pipeline
                    schema = GenerateService.generate_ui_schema(
                        current_field=current_field,
                        entered_data=entered_data
                    )

                    # Send UI Schema adaptation payload
                    await websocket.send_json({
                        "type": "ui_adaptation",
                        "confidence": min(98, int(score_obj.score + 8)),
                        "pattern": "guided-wizard",
                        "reason": f"System detected high hesitation ({hesitation_time}s) or rage clicks. Switched to step wizard.",
                        "reducedFields": 10 - len(schema.get("steps", [1, 2, 3])[0].get("fields", [])),
                        "schema": schema
                    })

            elif msg_type == "reset":
                # Reset state so adaptation can trigger again
                adaptation_triggered = False
                await websocket.send_json({
                    "type": "reset_success"
                })

    except WebSocketDisconnect:
        print("WebSocket client disconnected")
    except Exception as e:
        print(f"Error in WebSocket handler: {e}")