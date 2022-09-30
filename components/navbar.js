

const navbar = () => {
  return`<div id="top">
               <p>Delivering in Mumbai, Delhi and Gurugram | Same day delivery!</p>
          </div>
<div id="menu">
<div id="sidemenu">
         <div id="btn"> <span id="opennav" style="font-size:30px;cursor:pointer;margin-top:15px">&#9776; </span> </div>
         
          <div id="content">
          
          <p>Search for product &nbsp &nbsp &nbsp  <i class="fa-solid fa-magnifying-glass"></i></p>
          <hr>
          <p style="color: #98cb4c;">HOME</p>
          <hr>
          <select name="">
               <option value=""><a href="">ALL FRUITS</a>
               <option value=""><a href="">ALL VEGGIES</a></option>
               <option value=""><a href="">FRESH CUTS</a></option>
               <option value=""><a href="">FRUIT COMBOS</a></option>
               <option value=""><a href="">GIFTS BY KIMAYE</a></option>
               <option value=""><a href="">FRUITS X SUBSCRIPTION</a></option>
               <option value=""><a href="">COMMUNITY BUYING</a></option></option>
          </select>
          <hr>
          <select name="" id="">
               <option value=""><a href="">OUR STORY</a></option>
               <option value=""><a href="">WHY KIMAYE</a></option>
               <option value=""><a href="">TRACEABILITY</a></option>
               <option value=""><a href="">BEYOND FRUITS</a></option>
          </select>
          <hr>
          <p>GROW WITH KIMAYE</p>
          <hr>
          <p>KIMAYE REWARDS</p>
          <hr>
          <p>CONTACT US</p>
          <hr>
          <p>MY ACCOUNT</p>
          <hr>
          <p>LOG OUT</p>
          </div>

     </div>

     <div id="dropdown">
          <ul>
               <li>SHOP <i class="fa-solid fa-caret-down"></i>
                    <ul>
                         <li><a href="">ALL FRUITS</a></li>
                         <li><a href="">ALL VEGGIES</a></li>
                         <li><a href="">FRESH CUTS</a></li>
                         <li><a href="">FRUIT COMBOS</a></li>
                         <li><a href="">GIFTS BY KIMAYE</a></li>
                         <li><a href="">FRUITS X SUBSCRIPTION</a></li>
                         <li><a href="">COMMUNITY BUYING</a></li>
                    </ul>
               </li>
               <li>LEARN <i class="fa-solid fa-caret-down"></i>
                    <ul>
                         <li><a href="">OUR STORY</a></li>
                         <li><a href="">WHY KIMAYE</a></li>
                         <li><a href="">TRACEABILITY</a></li>
                         <li><a href="">BEYOND FRUITS</a></li>
                    </ul>
               </li>
               <li>GROW</li>
          </ul>
     </div>
     <div id="logo">
     <a href=""><img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1614326029" alt="logo"></a> 
     </div>
     <div id="funtn">
          <div><img src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png" alt="location"><span></span></div>
          <div><i class="fa-solid fa-magnifying-glass"></i>
          
          <div><input type="text" id="search" placeholder="Search for product"><button>Search</button></div> </div>
          <div id="EnableLogin"><i class="fa-solid fa-user"></i></div>
          <div><a href=""><i class="fa-solid fa-bag-shopping"></i></a></div>
     </div>
</div>
<!-- <div class="dropdown"> -->

<!-- </div> -->
<!-- ==-=-=-=-==-=-=-=-= -->

<div class="dropdown-content">

<div id="login">
    <div id="Sign_top">
        <h3 class="h3">SIGN IN</h3>
        <a id="cancel" href="#" class="a">CLOSE <i class="fa-solid fa-minus"></i></a>
    </div>
    <div id="form">
        <label for="email" class="label">Email address <span class="span">*</span></label>
        <input type="email"  class="input_email">
        <label for="password" class="label">Password <span class="span">*</span></label>
        <input type="password"  class="input_password">
    </div>

    <div>
        <button id="login_btn" class="button_clicked">LOGIN</button>
    </div>
    <div id="fdiv">
        <h4>Sign in with Facebook</h4>
        <i class="fa fa-facebook oxi_icon oxi_icon_facebook"></i>
    </div>
    <div id="gdiv">
        <h4>Sign in with Google</h4>
        <i class="fa fa-google oxi_icon oxi_icon_google"></i>
    </div>
    <div id="logo_sec">
        <img src="https://i.ibb.co/mCyLKXs/123333.png" alt="User Icon">
        <p>No account yet?</p>
        <p>Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.</p>
    </div>
    <div id="creat">
        <button class="button_clicked">Create An Account</button>
    </div>
</div>
<!-- --=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-==-=-==-= -->
<div id="signup">
    <div id="Sign_top">
        <h3 class="h3">SIGN UP</h3>
        <a id="cancel" href="#" class="a">CLOSE <i class="fa-solid fa-minus"></i></a>
    </div>
    <div id="fdiv">
        <h4>Sign in with Facebook</h4>
        <i class="fa fa-facebook oxi_icon oxi_icon_facebook"></i>
    </div>
    <div id="gdiv">
        <h4>Sign in with Google</h4>
        <i class="fa fa-google oxi_icon oxi_icon_google"></i>
    </div>
    <div id="form">
        <label class="label">First Name</label>
        <input type="text" id="firstName" >
        <label class="label">Last Name</label>
        <input type="text" id="lastName" >
        <label class="label">Email address <span class="span">*</span></label>
        <input type="email" id="email" class="e-mail">
        <label class="label">Password <span class="span">*</span></label>
        <input type="password" id="password" class="pass-word">
    </div>
    <div id="reg">
        <button class="button_clicked">REGISTER</button>
    </div>
    <hr>
    <div id="logo_sec">
        <img src="https://i.ibb.co/mCyLKXs/123333.png" alt="User Icon">
        <p>No account yet?</p>
        <p>Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.</p>
    </div>
    <div id="log">
        <button class="button_clicked">Login</button>
    </div>
</div>

</div>`

};

export { navbar };
