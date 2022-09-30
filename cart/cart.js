
let cartItem = JSON.parse(localStorage.getItem("cart_item")) || []
console.log('cartItem:', cartItem)
let cart_container = document.getElementById("cart-container");
let count = 1;
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


     let quantity_div = document.createElement("div");
     quantity_div.id = "quantity";



     //button for quantity inc and dec

     let minus_btn = document.createElement("button");
     minus_btn.id = "minus";
     minus_btn.innerText = "-"
     minus_btn.addEventListener("click", function () {
          count--
          let item_count = document.getElementById('demoInput');
          item_count.value = count;


     });
     let input = document.createElement("input");
     input.value = count;
     input.min = 1;
     input.max = 5;
     input.id = "demoInput"


     let plus_btn = document.createElement("button");
     plus_btn.id = "plus";
     plus_btn.innerText = "+"
     plus_btn.addEventListener("click", function () {
          count++
          let item_count = document.getElementById('demoInput');
          item_count.value = count;
          


     });

     let price = document.createElement("p");
     price.innerText = el.price;
     price.id = "pdprice"
     quantity_div.append(minus_btn, input, plus_btn, price);
     product_details.append(p, quantity_div);


     cart_container.append(productimage, product_details)


});

