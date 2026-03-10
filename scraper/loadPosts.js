async function scrollFeed(page) {

  await page.evaluate(async () => {
    await new Promise((resolve) => {

      let total = 0;
      const distance = 1000;

      const timer = setInterval(() => {

        window.scrollBy(0, distance);
        total += distance;

        if (total > document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }

      }, 500);

    });
  });

}

module.exports = { scrollFeed };