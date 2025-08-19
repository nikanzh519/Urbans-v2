function showLogin() {
document.getElementById("loginForm").style.display = "block";
}

function login() {
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if (username === "" || password === "") {
alert("Please enter both username and password.");
} else {
alert(`Welcome, ${username}!`);
// Redirect to another page
window.location.href = "welcome.html"; // Change this to your target page
}
}
