const { deletePost } = require("./deletePost");
const { delay } = require("../utils/delay");
const { randomBetween } = require("../utils/random");
const settings = require("../config/settings");

async function runDeletionLoop(page) {
  let deleted = 0;

  while (deleted < settings.maxDeletes) {

    const post = await page.$('div.feed-shared-update-v2');

    if (!post) {
      console.log("No posts visible, scrolling...");
      await page.mouse.wheel(0, 4000);
      await delay(3000);
      continue;
    }

    const success = await deletePost(page, post);

    if (success) {
      deleted++;
      console.log("Deleted post", deleted);
      console.log("Refreshing page to get new posts...");
      await page.reload({ waitUntil: "domcontentloaded" });
      await delay(3000); 

    } else {
      console.log("Skipping post");
      await page.mouse.wheel(0, 2000);
      await delay(1000);
    }

    await delay(randomBetween(settings.minDelay, settings.maxDelay));
  }

  console.log("Finished. Total deleted:", deleted);
}

module.exports = { runDeletionLoop };