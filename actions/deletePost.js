async function deletePost(page, menuButton) {

  await menuButton.click();

  await page.click('text=Delete post');

  await page.click('button:has-text("Delete")');

}

module.exports = { deletePost };