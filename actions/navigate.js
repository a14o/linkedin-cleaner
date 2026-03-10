const settings = require("../config/settings");

async function goToActivity(page) {

  await page.goto(settings.activityUrl);

  await page.waitForLoadState("networkidle");

}

module.exports = { goToActivity };