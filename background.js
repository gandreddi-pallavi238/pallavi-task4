let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  trackTime(tab);
});

async function trackTime(tab) {
  if (!tab.url) return;
  const domain = new URL(tab.url).hostname;
  if (activeTab) {
    const endTime = new Date();
    const timeSpent = (endTime - startTime) / 1000;
    console.log(`Spent ${timeSpent}s on ${activeTab}`);

    // Save to storage or send to backend
    chrome.storage.local.get([activeTab], (result) => {
      const total = (result[activeTab] || 0) + timeSpent;
      chrome.storage.local.set({ [activeTab]: total });
    });
  }
  activeTab = domain;
  startTime = new Date();
}
