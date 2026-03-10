require('dotenv').config();
const readline = require("readline");

const { startBrowser } = require('./auth/login');
const { goToActivity } = require("./actions/navigate");
const { runDeletionLoop } = require('./actions/deleteLoop');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

(async () => {
  try {
    const maxDeletesInput = await ask("How many posts to delete: ");
    rl.close();

    const maxDeletes = parseInt(maxDeletesInput, 10);

    const { browser, page } = await startBrowser();
    await goToActivity(page);

    await runDeletionLoop(page, maxDeletes);

    await browser.close();
  } catch (err) {
    console.error(err);
    rl.close();
  }
})();