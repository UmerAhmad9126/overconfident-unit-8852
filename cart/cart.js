

import { footer } from "../components/footer.js";
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();




let parent = document.getElementById("products");
let total_amount = document.getElementById("totalAmount");
let cart = JSON.parse(localStorage.getItem("cart_item"))
console.log(cart)
let total = 0;
function showProducts() {
     cart.forEach(function (product) {
          console.log(product.name);

          let div = document.createElement("div");

          let img = document.createElement("img");
          img.src = product.img;

          let product_price = document.createElement("h4");
          product_price.textContent = '₹' + product.price;

          let product_name = document.createElement("p");
          product_name.textContent = product.name;

          let addtocart_btn = document.createElement("button");
          addtocart_btn.innerText = "Added";

          addtocart_btn.onclick = function () {
               addtoCart(product);
          };
          total += Number(product.price);
          total_amount.textContent = '₹' + total
          div.append(img, product_name, product_price, addtocart_btn);

          parent.append(div);

     })
}
showProducts()
