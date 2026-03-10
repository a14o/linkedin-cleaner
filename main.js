const { startBrowser } = require('./auth/login');
const { runDeletionLoop } = require('./actions/deleteLoop');

(async () => {
  const { browser, page } = await startBrowser();

  await runDeletionLoop(page);

  await browser.close();
})();