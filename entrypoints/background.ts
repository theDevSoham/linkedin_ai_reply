export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });

  // check that the browser has installed extension
  browser.runtime.onInstalled.addListener(() => {
    console.log("Extension installed successfully");
  });
});
