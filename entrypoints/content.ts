export default defineContentScript({
  matches: ["https://www.linkedin.com/*"],
  main() {
    console.log("Hello content.");
  },
});
