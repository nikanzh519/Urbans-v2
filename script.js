function showRegister() {
document.getElementById("loginSection").style.display = "none";
document.getElementById("registerSection").style.display = "block";
}

function showLogin() {
document.getElementById("registerSection").style.display = "none";
document.getElementById("loginSection").style.display = "block";
}

function register() {
const username = document.getElementById("registerUsername").value;
const password = document.getElementById("registerPassword").value;

if (!username || !password) {
alert("Please fill in both fields.");
return;
}

if (localStorage.getItem(username)) {
alert("Username already exists. Try logging in.");
return;
}

localStorage.setItem(username, password);
alert("Profile created successfully!");
showLogin();
}

function login() {
const username = document.getElementById("loginUsername").value;
const password = document.getElementById("loginPassword").value;

const storedPassword = localStorage.getItem(username);

if (!storedPassword) {
alert("No profile found. Please create one.");
return;
}

if (storedPassword === password) {
alert(`Welcome back, ${username}!`);
window.location.href = "welcome.html";
} else {
alert("Incorrect password. Try again.");
}
}
