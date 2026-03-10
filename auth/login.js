const { chromium } = require('playwright');

async function startBrowser() {

  const browser = await chromium.launch({
    headless: false,
    slowMo: 200
  });

  const context = await browser.newContext({
    storageState: 'storage/linkedin-session.json'
  });

  const page = await context.newPage();

  await page.goto("https://www.linkedin.com");

  return { browser, page, context };
}

module.exports = { startBrowser };