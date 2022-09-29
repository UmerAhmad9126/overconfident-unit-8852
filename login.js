$(document).ready(function () {
  $("#cancel").mouseenter(function () {
    $("#cancel>i").toggleClass("fa-minus fa-xmark");
  });
  $("#cancel").mouseleave(function () {
    $("#cancel>i").toggleClass("fa-minus fa-xmark");
  });
});

let close = document.querySelector("#cancel");
close.addEventListener("click", function () {
  window.location.href = "index.html";
});

let button = document.querySelector("#login>div:last-child");

button.addEventListener("click", function () {
  window.location.href = "./signup.html";
});

// let background = document.querySelector("#body_click");
// background.addEventListener("click", function () {
//   window.location.href = "index.html";
// });

let Get_User_Data = JSON.parse(localStorage.getItem("User_Data"));

let login = document.querySelector("#login_btn");
login.addEventListener("click", function () {
  Get_User_Data.forEach(function (el) {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if (email == el.email && password == el.password) {
      alert("Login successful!!");
      window.location.href = "index.html";
    } else alert("Please enter valid credentials.");
  });
});
