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
// You can add more logic here, like redirecting or storing data
}
}
