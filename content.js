// content.js
chrome.storage.sync.get(["email", "birthday"], ({ email, birthday }) => {
  const emailField = document.querySelector("input[type='email']");
  const birthdayField = document.querySelector("input[type='date']");
  if (emailField) emailField.value = email;
  if (birthdayField) birthdayField.value = birthday;

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      const domain = window.location.hostname;
      chrome.storage.sync.get("signedUp", ({ signedUp = [] }) => {
        if (!signedUp.includes(domain)) {
          signedUp.push(domain);
          chrome.storage.sync.set({ signedUp });
        }
      });
    });
  }
});
