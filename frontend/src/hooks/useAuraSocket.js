import { useEffect, useRef, useState, useCallback } from 'react';

const WS_URL = import.meta.env.VITE_WS_URL || 'ws://127.0.0.1:8000/ws';
const RECONNECT_DELAY = 3000;

export default function useAuraSocket() {
  const socketRef = useRef(null);
  const reconnectTimer = useRef(null);
  const [connected, setConnected] = useState(false);
  const [lastScore, setLastScore] = useState(null);
  const [adaptation, setAdaptation] = useState(null);
  const [adaptationStarted, setAdaptationStarted] = useState(false);

  const connect = useCallback(() => {
    if (socketRef.current && socketRef.current.readyState <= 1) return;

    try {
      const ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        console.log('[AuraSocket] Connected to', WS_URL);
        setConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);

          if (msg.type === 'score_update') {
            setLastScore({ score: msg.score, risk_level: msg.risk_level });
          } else if (msg.type === 'adaptation_started') {
            setAdaptationStarted(true);
          } else if (msg.type === 'ui_adaptation') {
            setAdaptation(msg);
            setAdaptationStarted(false);
          } else if (msg.type === 'reset_success') {
            setAdaptation(null);
            setAdaptationStarted(false);
          }
        } catch (e) {
          console.warn('[AuraSocket] Failed to parse message:', e);
        }
      };

      ws.onclose = () => {
        console.log('[AuraSocket] Disconnected. Reconnecting in', RECONNECT_DELAY, 'ms');
        setConnected(false);
        socketRef.current = null;
        reconnectTimer.current = setTimeout(connect, RECONNECT_DELAY);
      };

      ws.onerror = (err) => {
        console.warn('[AuraSocket] Error:', err);
        ws.close();
      };

      socketRef.current = ws;
    } catch (e) {
      console.warn('[AuraSocket] Connection failed:', e);
      reconnectTimer.current = setTimeout(connect, RECONNECT_DELAY);
    }
  }, []);

  useEffect(() => {
    connect();
    return () => {
      clearTimeout(reconnectTimer.current);
      if (socketRef.current) socketRef.current.close();
    };
  }, [connect]);

  const sendTelemetry = useCallback((metrics, currentContext) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({
        type: 'telemetry',
        session_id: 'demo-session',
        metrics,
        current_context: currentContext,
      }));
    }
  }, []);

  const sendReset = useCallback(() => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: 'reset' }));
    }
    setAdaptation(null);
    setAdaptationStarted(false);
    setLastScore(null);
  }, []);

  return {
    connected,
    lastScore,
    adaptation,
    adaptationStarted,
    sendTelemetry,
    sendReset,
  };
}
