function buildPrompt(userInput) {
    return `
You are an expert React developer.

Generate a simplified React component.

User Context:
- Page: ${userInput.page}
- Problem: ${userInput.problem}
- Cognitive Score: ${userInput.score}

Rules:
- Use React JSX
- Use Tailwind CSS
- Keep the UI simple
- Return only the React component
`;
}

module.exports = { buildPrompt };