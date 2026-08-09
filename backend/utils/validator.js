function validateInput(userInput) {
    if (!userInput.page) {
        throw new Error("Page is required");
    }

    if (!userInput.problem) {
        throw new Error("Problem description is required");
    }

    if (
        typeof userInput.score !== "number" ||
        userInput.score < 0 ||
        userInput.score > 100
    ) {
        throw new Error("Score must be between 0 and 100");
    }

    return true;
}

module.exports = { validateInput };