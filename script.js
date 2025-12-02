//your JS code here. If required.
window.onload = function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitBtn = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");

    // ---- Load stored credentials if present ----
    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    // If credentials exist, show "Login as existing user" button
    if (savedUsername && savedPassword) {
        existingBtn.style.display = "inline-block";
    }

    // ---- Submit Button Event ----
    submitBtn.onclick = function (event) {
        event.preventDefault();  // prevent form reload

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert("Logged in as " + username);

        if (checkbox.checked) {
            // Save credentials
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            existingBtn.style.display = "inline-block";
        } else {
            // Remove stored credentials
            localStorage.removeItem("username");
            localStorage.removeItem("password");

            existingBtn.style.display = "none";
        }
    };

    // ---- Existing User Login Event ----
    existingBtn.onclick = function () {
        let storedUsername = localStorage.getItem("username");
        alert("Logged in as " + storedUsername);
    };
};

