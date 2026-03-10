const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "..", "logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const deletedLog = path.join(logDir, "deleted.log");
const errorLog = path.join(logDir, "errors.log");

function logDeleted(message) {
  fs.appendFileSync(deletedLog, message + "\n");
}

function logError(message) {
  fs.appendFileSync(errorLog, message + "\n");
}

module.exports = { logDeleted, logError };