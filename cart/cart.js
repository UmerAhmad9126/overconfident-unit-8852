
let cartItem = JSON.parse(localStorage.getItem("cart_item")) || []
console.log('cartItem:', cartItem)
let cart_container = document.getElementById("cart-container");
let cart_container2 = document.getElementById("cart-container2");


let count = 1;
let total_price;


cartItem.forEach(el => {

     let productimage = document.createElement("div");
     productimage.id = "productimage"
     let image = document.createElement("img")
     image.src = el.img;
     productimage.append(image);
     // ----------------------------------------------//
     let product_details = document.createElement("div");
     product_details.id = "productdata"
     let p = document.createElement("p");
     p.innerText = el.name;

     //----------------------------------------------//
     let quantity_div = document.createElement("div");
     quantity_div.id = "quantity";



     //button for quantity inc and dec

     let input = document.createElement("span");
     input.id = "demoInput"
     input.innerText = count


     let minus_btn = document.createElement("button");
     minus_btn.id = "minus";
     minus_btn.innerText = "-"
     minus_btn.addEventListener("click", function () {
          count--
          input.innerText = count
     });



     let plus_btn = document.createElement("button");
     plus_btn.id = "plus";
     plus_btn.innerText = "+"
     plus_btn.addEventListener("click", function () {
          count++
          // console.log('count:', count)
          input.innerText = count

     });
     
     total_price = count * el.price
     console.log('total_price:', total_price)

     let price = document.createElement("p");
     price.innerText = el.price;
     price.id = "pdprice"
     quantity_div.append(minus_btn, input, plus_btn, price);
     product_details.append(p, quantity_div);

     cart_container2.append(productimage, product_details)
     cart_container.append(cart_container2);

});





let total_amount = document.getElementById("total");
total_amount.innerText = total_price;