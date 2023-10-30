require("dotenv").config();
const os = require("os");

console.log(os.getenv(OPENAI_API_KEY));
