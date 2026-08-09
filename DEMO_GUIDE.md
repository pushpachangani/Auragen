# AuraGen: Final Demonstration Guide

This document is your complete, step-by-step guide to starting and presenting the AuraGen project to an evaluator. **Follow these instructions carefully to ensure a smooth presentation.**

---

## AURAGEN DEMO CHECKLIST

```text
[ ] Backend dependencies installed
[ ] Frontend dependencies installed
[ ] Environment configured
[ ] Backend starts
[ ] Frontend starts
[ ] Browser opens
[ ] No login required
[ ] WebSocket connected
[ ] Cognitive score visible/working
[ ] Demo data entered
[ ] Friction triggered
[ ] Adaptation triggered
[ ] Wizard appears
[ ] Existing data preserved
[ ] AI/fallback working
[ ] Demo ready
```

---

## BEFORE YOU START

**Required Software:**
- **Python 3.9+** (for the backend FastAPI server)
- **Node.js 18+** (for the frontend React application)

**Dependencies & Setup:**
- The frontend requires `npm install`.
- The backend requires dependencies from `requirements.txt`.
- An `OPENAI_API_KEY` inside `backend/.env` is **recommended** for the real AI path, but **optional**. If the key is missing or the request fails, the application uses a **deterministic fallback schema** so the demo will still work flawlessly.
- A `frontend/.env` file should contain `VITE_API_URL=http://127.0.0.1:8000` and `VITE_WS_URL=ws://127.0.0.1:8000/ws`.

**Authentication:**
- **Authentication/login is NOT required for the demo.** The application routes are fully open.

---

## EXACT STARTUP INSTRUCTIONS

### Terminal 1 — Backend
Open a terminal and run the following exact commands to start the FastAPI server:

```bash
cd backend
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```
*Successful Result:* You should see `Application startup complete` and `Uvicorn running on http://127.0.0.1:8000`.

### Terminal 2 — Frontend
Open a **new** terminal and run the following commands to start the React application:

```bash
cd frontend
npm install
npm run dev
```
*Successful Result:* You should see a Vite success message indicating the server is running on `http://localhost:5173`.

### Browser
Open your web browser and navigate directly to the demo:
**URL to open:** `http://localhost:5173/app/dynamic`

---

## 🎤 LIVE DEMO SCRIPT

Use this exact sequence during your presentation.

### 1. Initial State
**ACTION:** Open the browser to `http://localhost:5173/app/dynamic`.
**WHAT TO SHOW:** The "Complex form" card with 10 dense fields, and the "Live telemetry bar" showing the connection status and score.
**WHAT TO SAY:** "Welcome to AuraGen. What you're looking at is a traditional, dense financial form that users often struggle with. At the top, you can see our real-time telemetry engine monitoring the connection and tracking my interactions."
**EXPECTED RESULT:** The UI is loaded, the WebSocket status says "Connected", and the score is low (e.g., around 32).

### 2. Enter Data (State Preservation Setup)
**ACTION:** Click into the "Full legal name" field and type "Pushpa". Click into the "Employee ID" field and type "12345".
**WHAT TO SHOW:** The text explicitly visible in the form fields.
**WHAT TO SAY:** "Let's say a user starts filling this out. They enter their name, Pushpa, and their Employee ID, 12345."
**EXPECTED RESULT:** The data sits inside the form fields normally.

### 3. Trigger Friction
**ACTION:** Simulate intense friction/frustration. Rapidly click inside the "Full legal name" field 6-8 times (rage clicks). Move your mouse quickly and erratically over the form. Hesitate for a few seconds.
**WHAT TO SHOW:** Point to the telemetry bar at the top showing the `Velocity` and `Rage` metrics spiking, and the total `Score` increasing.
**WHAT TO SAY:** "Now, watch what happens when the user gets stuck. If I click repeatedly in frustration or move my mouse erratically, AuraGen's Friction Engine detects this. Notice the cognitive load score rising at the top of the screen."
**EXPECTED RESULT:** The score crosses the threshold (70+).

### 4. The Adaptation
**ACTION:** Wait for the AI generation to trigger. Do not click anything else.
**WHAT TO SHOW:** The UI will briefly show a "Generating interface…" state with a spinning loader, followed by the form completely morphing into the "AuraGen guided experience" wizard.
**WHAT TO SAY:** "Once the score crosses our threshold of 70, the system automatically intervenes. It takes the current context and dynamically generates a simplified, step-by-step wizard to reduce cognitive load."
**EXPECTED RESULT:** The 10-field dense form disappears and is replaced by a multi-step guided wizard interface.

### 5. Prove State Preservation
**ACTION:** Point to the first step of the new wizard interface.
**WHAT TO SHOW:** The "Full legal name" field still contains "Pushpa", and the "Employee ID" field still contains "12345".
**WHAT TO SAY:** "Critically, notice that the interface completely changed, but the user's existing input was not lost. The data they already typed has been seamlessly preserved in the new layout."
**EXPECTED RESULT:** Evaluator sees the exact data from Step 2 inside the new UI.

---

## 2-MINUTE DEMO

*(For a rushed evaluator)*

1. **ACTION:** Open `http://localhost:5173/app/dynamic`.
2. **SAY:** "This is AuraGen. It solves the problem of user drop-off on complex forms by adapting in real-time."
3. **ACTION:** Type "Pushpa" into "Full legal name" and "12345" into "Employee ID".
4. **SAY:** "A user starts filling out this dense form, but they get stuck."
5. **ACTION:** Rapidly click the field 6-8 times to trigger a rage-click penalty and spike the cognitive score over 70.
6. **SAY:** "The frontend tracks this friction via WebSocket. When the cognitive load crosses our threshold, the backend automatically triggers an AI."
7. **ACTION:** Wait for the UI to morph into the wizard.
8. **SAY:** "The backend generated a custom JSON UI schema, which the frontend renders as this guided wizard. Notice that the interface changed, but the user's existing input was not lost. That's real-time, self-healing UI."

---

## 5-MINUTE DEMO

1. **Problem:** "Traditional forms are static. When a user gets confused, they abandon the task."
2. **Existing UI:** Open `http://localhost:5173/app/dynamic` and show the 10-field form.
3. **Friction Telemetry:** Type "Pushpa" and "12345". Point to the telemetry bar. "We track cursor velocity, hesitation, and rage clicks entirely on the client, sending it over a WebSocket."
4. **Cognitive Score:** "These metrics are combined into a Cognitive Load Score."
5. **Trigger:** Rapidly click the fields to spike the score above 70.
6. **Backend Decision:** "At a score of 70, the backend decides the user needs help."
7. **AI/Fallback:** "It passes the user's current field and form data to an LLM, asking for a simplified layout."
8. **JSON Schema:** "The AI returns a strict JSON Schema—not raw code—ensuring security and reliability."
9. **Dynamic UI:** Watch the screen morph. "The frontend receives this schema and renders a step-by-step wizard."
10. **State Preservation:** "Because we use a unified state manager, the data entered before the adaptation—Pushpa and 12345—is perfectly preserved."
11. **Conclusion:** "The user can now comfortably complete their task without losing progress."

---

## TECHNICAL WALKTHROUGH

*(Use this to explain the architecture to a technical evaluator)*

### Frontend
- **React & Vite:** The frontend is a modern React application.
- **Telemetry Hook:** `useCognitiveTelemetry.js` tracks mouse movements, clicks, and keystrokes, calculating local metrics.
- **WebSocket Hook:** `useAuraSocket.js` maintains a persistent connection to the backend, streaming the metrics and the current form data every 500ms.
- **DynamicUI & Form State:** `DynamicUI.jsx` uses a unified `formData` object. Whether rendering the dense form or the wizard, both consume the exact same state, guaranteeing zero data loss during DOM transitions.

### Backend
- **FastAPI:** A high-performance Python backend handles concurrent WebSocket connections.
- **WebSocket Route:** `websocket.py` receives telemetry, passes it to the scoring service, and checks the threshold.
- **Scoring:** `ScoreService` normalizes the raw telemetry into a final 0-100 cognitive load score.
- **Schema Validation:** The generated UI is strictly validated using Pydantic (`UISchema`).

### AI & Security
- **OpenAI Integration:** `GenerateService` uses `gpt-4o` to dynamically restructure the specific form fields into logical steps based on where the user got stuck.
- **Controlled JSON Schema:** Instead of allowing an LLM to execute arbitrary React code in the browser, AuraGen asks the model for a controlled JSON UI schema. The backend validates that schema before the frontend renders it. This prevents prompt injection or malicious JavaScript execution.
- **Fallback:** AuraGen has a deterministic fallback so the adaptive UI remains reliable even if the external model is unavailable.

---

## POSSIBLE QUESTIONS & ANSWERS

**"What problem does AuraGen solve?"**
It solves user drop-off on complex applications by dynamically simplifying the interface before the user abandons the task.

**"How do you detect user confusion?"**
We track cursor velocity, idle hesitation time, and repeated "rage clicks" on the same element.

**"What is Cognitive Load Score?"**
It is an aggregated 0-100 metric calculated from the raw telemetry. A higher score means higher friction.

**"Why use WebSockets?"**
WebSockets allow for real-time, bi-directional streaming with incredibly low latency, which is required for live telemetry and instantaneous UI morphing.

**"Why not simply use a chatbot?"**
Chatbots force the user to change context and explain their problem. AuraGen fixes the environment itself without requiring the user to ask for help.

**"How does AI change the UI?"**
The AI processes the fields and dynamically separates them into logical wizard steps (a JSON schema), targeting the field where friction occurred first. 

**"Does the AI generate React code?"**
No. The AI generates a standard JSON object containing the layout schema (steps, titles, fields).

**"How do you prevent malicious AI-generated code?"**
Because we only generate JSON data, not executable JavaScript. The backend strictly validates this JSON using Pydantic models before the frontend is allowed to render it.

**"How do you preserve user-entered data?"**
We use a unified form state in React. The dense form and the AI-generated wizard are just two different visual representations reading from the exact same underlying `formData` object.

**"What happens if OpenAI fails?"**
AuraGen has a deterministic fallback. If the API key is missing or the request times out, the backend immediately serves a pre-configured safe wizard schema so the user is never left hanging.

**"What happens if the WebSocket disconnects?"**
The frontend's `useAuraSocket` hook is designed to automatically attempt a persistent reconnection.

**"Why is the UI dynamic?"**
Because users need assistance that adapts to their exact moment of friction, rather than static help pages.

**"What is the role of FastAPI?"**
FastAPI provides an extremely fast asynchronous server to handle real-time WebSocket telemetry ingestion and coordinate the AI generation pipeline.

**"What is the role of React?"**
React natively handles rapid DOM updates, allowing for the smooth, state-preserving UI transition without hard page reloads.

**"How does the threshold trigger work?"**
If the normalized Cognitive Load Score reaches 70 or above, `websocket.py` flags an overload state and automatically initiates the UI generation pipeline.

**"Is authentication required?"**
No, authentication is bypassed for this demo so we can focus directly on the core interaction loop.

**"Is a database required for the demo?"**
No, the telemetry and state are handled entirely in memory over the active WebSocket session.

---

## COMPLETE SPEAKING SCRIPT

**Introduction**
"Hi, my project is AuraGen. It's a self-healing UI system designed to solve a major problem in web applications: user abandonment due to complex interfaces."

**Problem**
"Usually, when a user gets confused by a dense form, they have to seek out a help article or a chatbot. AuraGen flips this around. It observes the user and fixes the interface automatically."

**Live Demo**
"Let me show you. Here is a complex 10-field financial form. I'm going to start filling it out. I'll enter 'Pushpa' and '12345'."
*(Type data into the form)*
"Now, let's pretend I'm getting frustrated. I start clicking around rapidly and moving my mouse erratically."
*(Rage click the form until the score crosses 70)*

**Result**
"Notice the cognitive score spiking at the top. Once it hits our threshold, the system intervenes. The AI completely restructures the UI into a guided wizard. And most importantly, look at the data—'Pushpa' and '12345' are perfectly preserved."

**Architecture & Security**
"Behind the scenes, the frontend is streaming telemetry via WebSockets to a FastAPI backend. When the threshold is crossed, we don't ask the AI to write React code—that would be a security nightmare. Instead, we ask it for a strict JSON schema. The backend validates this schema with Pydantic, sends it back to the frontend, and React renders the new layout using a unified state manager."

**Conclusion**
"The result is a responsive, adaptive interface that catches failing users and guides them to completion without losing a single keystroke."

---

## DO NOT DO THIS DURING DEMO

- **Don't start the backend twice:** Ensure port 8000 is only in use by one terminal.
- **Don't close the backend terminal:** The WebSocket connection will instantly die.
- **Don't expose API keys:** If you open `backend/.env` on screen, make sure it doesn't leak secrets.
- **Don't depend on login:** Just go straight to `http://localhost:5173/app/dynamic`.
- **Don't refresh during adaptation unless necessary:** If you refresh, you will lose the in-memory React state and have to trigger the cognitive score again.

---

## TROUBLESHOOTING

### Port already in use
**Issue:** `uvicorn` or `vite` fails to start because the port is taken.
**Fix:** Find and kill the terminal running the old process, or restart your terminal instance.

### Backend dependency error
**Issue:** `ModuleNotFoundError: No module named 'pydantic_settings'` (or similar).
**Fix:** Ensure your virtual environment is activated and run `pip install -r requirements.txt`. (This was fixed during development, but double-check your venv).

### Frontend dependency error
**Issue:** Vite command not found or missing packages.
**Fix:** Run `npm install` inside the `frontend` folder.

### WebSocket connection issue
**Issue:** UI says "Offline" in the top bar.
**Fix:** Check that the backend FastAPI server is actually running and that there are no errors in the backend terminal output.

### OpenAI key unavailable
**Issue:** No API key configured.
**Fix:** Do nothing! Explain that the deterministic fallback should still allow the demo to work flawlessly. The backend will print `OPENAI_API_KEY is not configured. Using deterministic fallback schema` and the UI will morph as expected.
