const { buildPrompt } = require("../prompts/uiPrompt");

async function generateUI(userInput) {

    const prompt = buildPrompt(userInput);

    console.log("Generated Prompt:");
    console.log(prompt);

    // TODO:
    // LangChain/OpenAI integration

    return prompt;
}

module.exports = { generateUI };