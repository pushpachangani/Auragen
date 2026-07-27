export function clamp(value, minimum = 0, maximum = 100) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function calculateCognitiveScore({
  previous = 30,
  velocity = 0,
  rageClicks = 0,
  hesitation = 0,
  clickErrors = 0,
}) {
  const weighted =
    previous * 0.74 +
    velocity * 0.16 +
    rageClicks * 5 +
    hesitation * 2.2 +
    clickErrors * 2;

  return Math.round(clamp(weighted));
}

export function scoreLabel(score) {
  if (score >= 80) return 'Critical';
  if (score >= 65) return 'High';
  if (score >= 45) return 'Elevated';
  return 'Comfortable';
}
