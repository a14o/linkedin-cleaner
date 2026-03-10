const { scrollFeed } = require('../scraper/loadPosts');
const { deletePost } = require('./deletePost');

async function runDeletionLoop(page) {

  while (true) {

    await scrollFeed(page);

    const menus = await page.$$('button[aria-label*="Control menu"]');

    if (menus.length === 0) break;

    for (const menu of menus) {

      try {

        await deletePost(page, menu);

      } catch (err) {

        console.log("Failed deletion");

      }

    }

  }

}

module.exports = { runDeletionLoop };