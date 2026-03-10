const { chromium } = require("playwright");
const fs = require("fs");

async function startBrowser() {

  const browser = await chromium.launch({
    headless: false,
    slowMo: 100
  });

  let context;

  if (fs.existsSync("storage/linkedin-session.json")) {

    console.log("Loading saved LinkedIn session...");

    context = await browser.newContext({
      storageState: "storage/linkedin-session.json"
    });

  } else {

    console.log("No saved session found. Logging in manually...");

    context = await browser.newContext();

  }

  const page = await context.newPage();

  await page.goto("https://www.linkedin.com/login");

  if (!fs.existsSync("storage/linkedin-session.json")) {

    console.log("Login to LinkedIn, then press ENTER.");

    await new Promise(resolve => process.stdin.once("data", resolve));

    await context.storageState({
      path: "storage/linkedin-session.json"
    });

    console.log("Session saved!");
  }

  await page.goto("https://www.linkedin.com/feed/");

  return { browser, page, context };
}

module.exports = { startBrowser };