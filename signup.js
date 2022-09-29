$(document).ready(function () {
  $("#cancel").mouseenter(function () {
    $("#cancel>i").toggleClass("fa-minus fa-xmark");
  });
  $("#cancel").mouseleave(function () {
    $("#cancel>i").toggleClass("fa-minus fa-xmark");
  });
});

let loginPage = document.querySelector("#log");
loginPage.addEventListener("click", function () {
  window.location.href = "./login.html";
});

let register = document.querySelector("#signup>div:nth-child(5)");
let fName = document.querySelector("#firstName");
let lName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let User_Data = [];
register.addEventListener("click", function () {
  let Rej_data = {
    fName: firstName.value,
    lName: lastName.value,
    email: email.value,
    password: password.value,
  };

  User_Data.push(Rej_data);

  localStorage.setItem("User_Data", JSON.stringify(User_Data));
  console.log("User_signup_data", User_Data);

  window.location.href = "./login.html";
});

let close = document.querySelector("#cancel");
close.addEventListener("click", function () {
  window.location.href = "index.html";
});

// let background = document.querySelector("#body_click");
// background.addEventListener("click", function () {
//   window.location.href = "index.html";
// });
