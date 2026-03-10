const settings = require("../config/settings");

async function goToActivity(page) {

  console.log("Opening activity page...");

  await page.goto(settings.activityUrl, {
    waitUntil: "domcontentloaded"
  });

}

module.exports = { goToActivity };