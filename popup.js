// popup.js

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const birthday = document.getElementById("birthday").value;
  chrome.storage.sync.set({ email, birthday });
});

chrome.storage.sync.get("signedUp", ({ signedUp = [] }) => {
  const list = document.getElementById("signedUpList");
  signedUp.forEach(site => {
    const item = document.createElement("div");
    item.textContent = `Signed up: ${site}`;
    list.appendChild(item);
  });
});
