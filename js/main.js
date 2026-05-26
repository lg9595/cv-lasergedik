function checkPassword() {

  const password =
    document.getElementById("password").value;

  const message =
    document.getElementById("login-message");

  if (password === "HFTM2026") {

    window.location.href = "index.html";

  } else {

    message.textContent =
      "Falsches Passwort.";

    message.style.color = "red";
  }
}