import { navbar } from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { footer } from "./components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let grow_link = document.getElementById("grow_link");
grow_link.addEventListener("click", function () {
    window.location.href = "./growpage/grow.html"
});