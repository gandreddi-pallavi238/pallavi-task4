let currentTab = '';
let startTime = Date.now();

chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, tab => {
        switchTab(tab.url);
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.status === 'complete') {
        switchTab(tab.url);
    }
});

function switchTab(url) {
    const endTime = Date.now();
    const timeSpent = (endTime - startTime) / 1000;

    if (currentTab) {
        let domain = new URL(currentTab).hostname;
        chrome.storage.local.get([domain], (result) => {
            let totalTime = (result[domain] || 0) + timeSpent;
            chrome.storage.local.set({ [domain]: totalTime });
        });
    }

    currentTab = url;
    startTime = Date.now();
}
