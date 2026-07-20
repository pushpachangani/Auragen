const { validateInput } = require("../utils/validator");
const { buildPrompt } = require("../prompts/uiPrompt");

async function generateUI(userInput) {

    validateInput(userInput);

    const prompt = buildPrompt(userInput);

    console.log(prompt);

    return prompt;
}

module.exports = { generateUI };