// Elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check if saved credentials exist
const savedUser = localStorage.getItem("username");
const savedPass = localStorage.getItem("password");

// If credentials found → show the "Login as existing user" button
if (savedUser && savedPass) {
  existingBtn.style.display = "block";
}

// Existing user login button
existingBtn.addEventListener("click", () => {
  alert(`Logged in as ${savedUser}`);
});

// Submit form logic
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove saved credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});
