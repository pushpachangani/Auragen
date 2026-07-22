# Prompt Design Documentation

## Purpose of the Prompt

The prompt is designed to generate a simplified and user-friendly React UI component based on the user's interaction data. It helps reduce cognitive load by adapting the interface according to the user's difficulty level and context.

---

## Input Fields

The AI prompt accepts the following inputs:

| Field | Type | Description |
|-------|------|-------------|
| page | String | Name of the current page (e.g., Financial Form, Dashboard). |
| problem | String | The specific issue or difficulty faced by the user. |
| score | Number | Cognitive load score (0–100). Higher values indicate greater user difficulty. |

---

## Expected Output

The AI should generate a simplified React component that:

- Uses React JSX.
- Uses Tailwind CSS for styling.
- Reduces interface complexity.
- Improves readability and usability.
- Returns only the React component code.

---

## Example Prompt

```
You are an expert React developer.

Generate a simplified React component.

User Context:
- Page: Financial Form
- Problem: Too many fields
- Cognitive Score: 90

Rules:
- Use React JSX
- Use Tailwind CSS
- Keep the UI simple
- Return only the React component.
```

---

## Expected AI Response

The AI should return a simplified React component similar to:

```jsx
<div className="max-w-md mx-auto p-6">
  <h2 className="text-xl font-bold mb-4">
    Financial Information
  </h2>

  <input
    className="border p-2 w-full rounded"
    placeholder="Enter Income"
  />

  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
    Continue
  </button>
</div>
```

---

## Future Improvements

- Integrate LangChain for prompt orchestration.
- Connect with OpenAI/GPT models.
- Generate adaptive UI based on real-time cognitive scores.
- Support multiple page templates and UI layouts.