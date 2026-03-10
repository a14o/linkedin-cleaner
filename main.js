require('dotenv').config();

const { startBrowser } = require('./auth/login');
const { goToActivity } = require("./actions/navigate");
const { runDeletionLoop } = require('./actions/deleteLoop');

(async () => {
  const { browser, page } = await startBrowser();

  await goToActivity(page);

  await runDeletionLoop(page);

  await browser.close();
})();