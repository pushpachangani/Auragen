const { validateInput } = require("../utils/validator");
const { buildPrompt } = require("../prompts/uiPrompt");

async function generateUI(userInput) {
    validateInput(userInput);

    const prompt = buildPrompt(userInput);

    console.log("========== Generated Prompt ==========");
    console.log(prompt);
    console.log("======================================");

    return prompt;
}

module.exports = { generateUI };