
import browser from "webextension-polyfill";

// Listen for messages sent from other parts of the extension
browser.runtime.onMessage.addListener((request: { popupMounted: boolean }) => {
  console.log('gpt4free-browser-extension - scripts-background');
});

browser.action.onClicked.addListener(() => {
  // ns.sendToActiveTab("openDrawer")
  console.log('openDrawer')
});
