const promptTemplates = {
    financialForm: (score) => `
You are an expert React developer.

Simplify the financial form.

Cognitive Score: ${score}

Requirements:
- Use Tailwind CSS
- Reduce form complexity
- Return only JSX
`,

    dashboard: (score) => `
Generate a simplified dashboard.

Cognitive Score: ${score}

Requirements:
- Highlight important information
- Reduce visual clutter
- Return only JSX
`
};

module.exports = { promptTemplates };