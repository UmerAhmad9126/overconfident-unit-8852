import { navbar } from "../components/navbar.js";
// console.log('navbar:', navbar)
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();


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

let cartArr = JSON.parse(localStorage.getItem("cart_item")) || [];
let item_count = document.querySelector(".cart_add");
item_count.innerHTML = cartArr.length;
