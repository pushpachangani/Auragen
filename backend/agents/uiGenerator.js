const { formatResponse } = require("../utils/responseFormatter");

const formatted = formatResponse(prompt);

console.log(formatted);

return formatted;