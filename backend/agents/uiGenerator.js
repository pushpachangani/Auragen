const { promptTemplates } = require("../prompts/uiPrompt");

function generatePrompt(page, score) {
    if (page === "dashboard") {
        return promptTemplates.dashboard(score);
    }

    return promptTemplates.financialForm(score);
}

module.exports = { generatePrompt };