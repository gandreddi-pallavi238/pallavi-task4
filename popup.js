const productiveSites = ["github.com", "stackoverflow.com", "w3schools.com"];
const unproductiveSites = ["facebook.com", "instagram.com", "youtube.com"];

chrome.storage.local.get(null, (items) => {
    const list = document.getElementById("site-list");

    for (let domain in items) {
        const li = document.createElement("li");
        const time = Math.round(items[domain]);
        const isProductive = productiveSites.includes(domain);
        const isUnproductive = unproductiveSites.includes(domain);

        li.textContent = `${domain}: ${time}s`;

        if (isProductive) li.style.color = "green";
        else if (isUnproductive) li.style.color = "red";

        list.appendChild(li);
    }
});
