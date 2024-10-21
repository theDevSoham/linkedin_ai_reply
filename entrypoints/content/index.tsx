export default defineContentScript({
  matches: ["https://*.linkedin.com/*"],
  main() {
    function handleFocus(inputElement: Element) {
      console.log("Alerted");
    }

    function handleBlur(inputElement: Element) {
      console.log("Blurred");
    }

    function attachListeners() {
      const chatInputs = document.querySelectorAll(
        ".msg-form__contenteditable"
      );

      chatInputs.forEach((input) => {
        input.addEventListener("focus", () => handleFocus(input));
        input.addEventListener("blur", () => handleBlur(input));
      });
    }

    // Run the function when the script loads
    attachListeners();

    // Use a MutationObserver to handle dynamically added chat inputs
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          attachListeners();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  },
});
