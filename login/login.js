import { navbar } from "../components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

import { footer } from "../components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

window.onscroll = function () { myFunction() };
var header = document.getElementById("menu");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

document.getElementById("signup").style.display = "none";


document.getElementById("login").style.display = "block";
document.getElementById("signup").style.display = "none";



let New_User = document.querySelector("#login>div:last-child");

New_User.addEventListener("click", function () {
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "block";
});



let Get_User_Data = JSON.parse(localStorage.getItem("User_Data"));
console.log('Get_User_Data:', Get_User_Data)

let login = document.querySelector("#login_btn");
login.addEventListener("click", function () {

  let email_id = document.querySelector(".input_email").value;
  console.log('email_id:', email_id)
  let password = document.querySelector(".input_password").value;

  if (email_id == Get_User_Data.email && password == Get_User_Data.password) {
    alert("Login successful!!");
    window.location.href = "../index.html";
  } else {
    alert("Please enter valid credentials.");
    window.location.href
  }

});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==--=-=

let register = document.querySelector("#signup>div:nth-child(5)");
let fName = document.querySelector("#firstName");
let lName = document.querySelector("#lastName");
let email = document.querySelector(".e-mail");
let password = document.querySelector(".pass-word");
register.addEventListener("click", function () {
  let Rej_data = {
    fName: firstName.value,
    lName: lastName.value,
    email: email.value,
    password: password.value,
  };


  localStorage.setItem("User_Data", JSON.stringify(Rej_data));
  console.log("User_signup_data", Rej_data);


  alert("Registration successful!");

  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "none";
});

let loginBtn = document.querySelector("#log");
loginBtn.addEventListener("click", function () {
  document.getElementById("login").style.display = "block";
  document.getElementById("signup").style.display = "none";
});
