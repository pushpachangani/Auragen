const uiPrompt = require("../prompts/uiPrompt");

console.log(uiPrompt);const uiPrompt = require("../prompts/uiPrompt");

async function generateUI(userInput) {

    console.log("Prompt:");
    console.log(uiPrompt);

    console.log("User Input:");
    console.log(userInput);

    // TODO:
    // Call LangChain/OpenAI here

    return "Generated UI";
}

module.exports = {
    generateUI
};