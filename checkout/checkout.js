
function constructor(e, f, l, a, h, c, s, p, m) {
    this.email = e;
    this.first_name = f;
    this.last_name = l;
    this.adress = a;
    this.house_name = h;
    this.city = c;
    this.state = s;
    this.pincode = p;
    this.mobile = m;

}


let order_btn = document.getElementById("order");
order_btn.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let adress = document.getElementById("addressname").value;
    let house_name = document.getElementById("apart").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let pincode = document.getElementById("pin").value;
    let mobile = document.getElementById("mobile").value;

    let u1 = new constructor(email, first_name, last_name, adress, house_name, city, state, pincode, mobile);
    console.log('u1:', u1);
    if (email == "" && first_name == "" && last_name == "" && adress == "" && house_name == "" && city == "" && state == "" && pincode == "" && mobile == "") {
        alert("please fill all input fields!")
    } else {
        alert("Order placed Successfull!");
        window.location.href="../index.html"
    }
});










