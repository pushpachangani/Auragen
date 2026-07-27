import { useEffect, useRef, useState } from 'react';
import { calculateCognitiveScore } from '../utils/cognitiveScore';

const initialMetrics = {
  score: 32,
  velocity: 0,
  rage: 0,
  idle: 0,
  hesitation: 0,
  clickErrors: 0,
  typing: 0,
};

export default function useCognitiveTelemetry() {
  const [metrics, setMetrics] = useState(initialMetrics);
  const lastPointer = useRef({ x: 0, y: 0, time: Date.now() });
  const recentClicks = useRef([]);
  const lastClick = useRef({ target: null, time: 0 });
  const idleTimer = useRef(null);

  useEffect(() => {
    const updateScore = (current, changes) => {
      const next = { ...current, ...changes };
      return {
        ...next,
        score: calculateCognitiveScore({
          previous: current.score,
          velocity: next.velocity,
          rageClicks: next.rage,
          hesitation: next.hesitation,
          clickErrors: next.clickErrors,
        }),
      };
    };

    const handleMove = (event) => {
      const now = Date.now();
      const elapsed = Math.max(16, now - lastPointer.current.time);
      const distance = Math.hypot(
        event.clientX - lastPointer.current.x,
        event.clientY - lastPointer.current.y,
      );
      const velocity = Math.min(100, Math.round((distance / elapsed) * 100));

      lastPointer.current = { x: event.clientX, y: event.clientY, time: now };
      setMetrics((current) => updateScore(current, { velocity, idle: 0 }));

      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        setMetrics((current) => updateScore(current, {
          idle: current.idle + 1,
          hesitation: current.hesitation + 1,
        }));
      }, 1800);
    };

    const handleClick = (event) => {
      const now = Date.now();
      recentClicks.current = [
        ...recentClicks.current.filter((time) => now - time < 1200),
        now,
      ];

      const repeatedTarget =
        lastClick.current.target === event.target && now - lastClick.current.time < 450;
      lastClick.current = { target: event.target, time: now };

      setMetrics((current) => {
        const rage = recentClicks.current.length >= 3 ? current.rage + 1 : current.rage;
        const clickErrors = repeatedTarget ? current.clickErrors + 1 : current.clickErrors;
        return updateScore(current, { rage, clickErrors });
      });
    };

    const handleKey = () => {
      setMetrics((current) => ({
        ...current,
        typing: Math.min(120, current.typing + 3),
      }));
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKey);
      clearTimeout(idleTimer.current);
    };
  }, []);

  return metrics;
}
