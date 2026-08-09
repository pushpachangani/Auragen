function formatResponse(prompt) {
    return {
        status: "success",
        timestamp: new Date().toISOString(),
        prompt
    };
}

module.exports = { formatResponse };