// const { default: axios } = require("axios");

document.addEventListener("DOMContentLoaded", (e) => {
  //   on key up event
  document.querySelector("#username").addEventListener("keyup", (e) => {
    if (e.target.value.length > 0) {
      document.querySelector("#username").classList.remove("is-invalid");
    } else {
      document.querySelector("#username").classList.add("is-invalid");
    }
  });
  document.querySelector("#email").addEventListener("keyup", (e) => {
    if (e.target.value.length > 0) {
      document.querySelector("#email").classList.remove("is-invalid");
    } else {
      document.querySelector("#email").classList.add("is-invalid");
    }
  });
  document.querySelector("#password").addEventListener("keyup", (e) => {
    if (e.target.value.length > 0) {
      document.querySelector("#password").classList.remove("is-invalid");
    } else {
      document.querySelector("#password").classList.add("is-invalid");
    }
  });
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let data = { username, email, password };
    if (username == "") {
      document.querySelector("#username").classList.add("is-invalid");
    } else {
      document.querySelector("#username").classList.remove("is-invalid");
    }
    if (email == "") {
      document.querySelector("#email").classList.add("is-invalid");
    } else {
      document.querySelector("#email").classList.remove("is-invalid");
    }
    if (password == "") {
      document.querySelector("#password").classList.add("is-invalid");
    } else {
      document.querySelector("#password").classList.remove("is-invalid");
    }
    if (username != "" && email !== "" && password != "") {
      const fd = new FormData();
      fd.append("username", username);
      fd.append("email", email);
      fd.append("password", password);
      fetch("/registerApi", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.text())
        .then((data) => {
          if (data == "success") {
            window.location.href = "/login";
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          // console.log("finally");
        });
    }
  });
});
