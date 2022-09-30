import {navbar}  from "../components/navbar.js"

     let nav = document.getElementById('navbar')
     nav.innerHTML = navbar()




document.getElementById("login").style.display = "none";
document.getElementById("signup").style.display = "none";

document.getElementById("EnableLogin").addEventListener("click",EnableLogin)

function EnableLogin() {
  console.log("safdgfdh")
  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "none";
}



let close = document.querySelector("#cancel");
close.addEventListener("click", function () {
  window.location.href = "index.html";
});

let New_User = document.querySelector("#login>div:last-child");

New_User.addEventListener("click", function () {
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "block";
});

// =-=-=-=-=-=-=-=-=
// let background = document.querySelector("#body_click");
// background.addEventListener("click", function () {
//   window.location.href = "index.html";
// });

let Get_User_Data = JSON.parse(localStorage.getItem("User_Data"));

let login = document.querySelector("#login_btn");
login.addEventListener("click", function () {
  Get_User_Data.forEach(function (el) {
    let email = document.querySelector(".input_email").value;
    let password = document.querySelector(".input_password").value;

    if (email == el.email && password == el.password) {
      alert("Login successful!!");
      window.location.href = "index.html";
    } else alert("Please enter valid credentials.");
  });
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==--=-=

let register = document.querySelector("#signup>div:nth-child(5)");
let fName = document.querySelector("#firstName");
let lName = document.querySelector("#lastName");
let email = document.querySelector(".e-mail");
let password = document.querySelector(".pass-word");
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

  alert("Registration successful!");

  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "none";
  // window.location.href = "./login.html";
});

let loginBtn = document.querySelector("#log");
loginBtn.addEventListener("click", function () {
  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "none";
});
