
let cartItem = JSON.parse(localStorage.getItem("mycart")) || []


cartItem.forEach(el,i => {

     let div = document.createElement("div")

     let image = document.createElement("img")
     image.src = el

     let product_name = document.createElement("h5")
     product_name.innerText = el

     let weight = document.createElement("p")
     weight.innerText = el
     
});