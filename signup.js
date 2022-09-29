$(document).ready(function () {
  $("#closeBtn").mouseenter(function () {
    $("#closeBtn>i").toggleClass("fa-minus fa-xmark");
  });
  $("#closeBtn").mouseleave(function () {
    $("#closeBtn>i").toggleClass("fa-minus fa-xmark");
  });
});

let facebook = document.querySelector("#signup>div:nth-child(2)");
facebook.addEventListener("click", function () {
  window.location.href =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=1896981220538415&kid_directed_site=0&app_id=1896981220538415&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.2%2Fdialog%2Foauth%3Fclient_id%3D1896981220538415%26state%3Deb33f7b40d5a03e1e257cd025f827f60%26response_type%3Dcode%26sdk%3Dphp-sdk-5.4.4%26redirect_uri%3Dhttps%253A%252F%252Fsocial-login.oxiapps.com%252Fauth%252Ffacebook%26scope%3Demail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df2d352cd-0bbf-481d-8993-c3559921d07d%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fsocial-login.oxiapps.com%2Fauth%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Deb33f7b40d5a03e1e257cd025f827f60%23_%3D_&display=popup&locale=en_GB&pl_dbl=0";
});

let google = document.querySelector("#signup>div:nth-child(3)");
google.addEventListener("click", function () {
  window.location.href =
    "https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fsocial-login.oxiapps.com%2Fauth%2Fgoogle&client_id=898543883992-ut65aoh5alu6s7jlcs5hk05htbagjs9n.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&access_type=online&approval_prompt=auto&flowName=GeneralOAuthFlow";
});

let login = document.querySelector("#signup>div:last-child");
login.addEventListener("click", function () {
  window.location.href = "login.html";
});

let register = document.querySelector("#signup>div:nth-child(5)");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signupArr = [];
register.addEventListener("click", function () {
  let signupObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };

  signupArr.push(signupObj);

  localStorage.setItem("signupArr", JSON.stringify(signupArr));

  window.location.href = "login.html";
});

let close = document.querySelector("#closeBtn");
close.addEventListener("click", function () {
  window.location.href = "index.html";
});

let background = document.querySelector("#background");
background.addEventListener("click", function () {
  window.location.href = "index.html";
});
