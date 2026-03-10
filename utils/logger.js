const fs = require("fs");

function logDeleted(message) {
  fs.appendFileSync("logs/deleted.log", message + "\n");
}

function logError(message) {
  fs.appendFileSync("logs/errors.log", message + "\n");
}

module.exports = { logDeleted, logError };