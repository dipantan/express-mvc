document.addEventListener("DOMContentLoaded", (e) => {
  //   on key up event
  document.querySelector("#username").addEventListener("keyup", (e) => {
    if (e.target.value.length > 0) {
      document.querySelector("#username").classList.remove("is-invalid");
    } else {
      document.querySelector("#username").classList.add("is-invalid");
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
    let password = document.querySelector("#password").value;
    if (username == "") {
      document.querySelector("#username").classList.add("is-invalid");
    } else {
      document.querySelector("#username").classList.remove("is-invalid");
    }
    if (password == "") {
      document.querySelector("#password").classList.add("is-invalid");
    } else {
      document.querySelector("#password").classList.remove("is-invalid");
    }
    if (username != "" && password != "") {
      fetch("/loginApi", {
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
          // console.log("data");
          if (data == "success") {
            window.location.href = "/";
          } else {
            document.querySelector("#error").innerHTML = data;
          }
        });
    }
  });
});
