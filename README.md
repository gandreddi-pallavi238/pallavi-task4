## Task 4 – 🧩 Chrome Extension for Time Tracking & Productivity Analytics
company:CODTECH IT SOLUTIONS

NAME:GANDREDDI PALLAVI

INTERN ID:CT04DF916

DOMAIN:FULL STACK WEB DEVELOPMENT

DURATION:4 WEEKS

This project is part of **CodTech Internship - Task 4**. It is a Chrome Extension that tracks the time a user spends on different websites, classifies them as productive or unproductive, and displays productivity analytics through a popup dashboard.

---

## 🔍 Features

* ✅ Tracks time spent on each website while browsing.
* ✅ Classifies websites as **productive** (e.g., coding platforms) or **unproductive** (e.g., social media).
* ✅ Stores data using Chrome's local storage.
* ✅ Displays visited sites with time spent in a popup.
* ✅ Highlights productive sites in green and unproductive in red.
* ✅ Can be extended to use a backend with MongoDB/Firebase for analytics and weekly reports.

---

## 📁 Folder Structure

```
task-4-extension/
│
├── manifest.json       // Chrome extension config
├── background.js       // Tracks active tab and time
├── popup.html          // Popup UI
├── popup.js            // Logic for loading data into popup
├── style.css           // Styling for popup
└── README.md           // Project description
```

---

## 🛠️ Tech Stack

* HTML, CSS, JavaScript
* Chrome Extension APIs
* (Optional) Node.js + MongoDB / Firebase for backend analytics

---

## 🚀 How to Install

1. Download or clone the repository.
2. Go to `chrome://extensions/` in your browser.
3. Enable **Developer Mode** (top right).
4. Click **Load Unpacked**.
5. Select the `task-4-extension` folder.
6. The extension will appear in the toolbar. Click it to view time spent.

---

## 🧠 How It Works

* The background script (`background.js`) listens for tab changes.
* It logs the time a user spends on each site.
* The popup (`popup.html`) shows the total time with color-coded site classification.
* The extension uses `chrome.storage.local` to store session data.

---

## 🔧 Customization

To add more productive or unproductive sites, update this array in `popup.js`:

```js
const productiveSites = ["github.com", "stackoverflow.com"];
const unproductiveSites = ["facebook.com", "youtube.com"];
```

---

## 📈 Future Improvements

* ⏱️ Add weekly reports and visual charts using Chart.js or Recharts.
* ☁️ Sync data to a backend for multi-device support.
* 🔐 Add user authentication (via Firebase).
* 📊 Create a full dashboard web app for detailed analytics.
