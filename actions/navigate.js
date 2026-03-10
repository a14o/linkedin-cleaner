const settings = require('../config/settings');

async function goToActivity(page) {
  console.log("Opening activity page...");

  await page.goto(settings.activityUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(4000);

  if (!page.url().includes('recent-activity')) {
    console.log("Redirect detected, navigating back to activity page...");
    await page.goto(settings.activityUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(4000);
  }

  try {
    await page.waitForSelector('div.feed-shared-update-v2', { timeout: 10000 });
    console.log("Activity feed loaded.");
  } catch {
    console.log("Warning: No posts found on activity page.");
  }
}

module.exports = { goToActivity };