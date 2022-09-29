

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
          <div><a href="cart.html"><i class="fa-solid fa-user"></i></a></div>
          <div><a href=""><i class="fa-solid fa-bag-shopping"></i></a></div>
     </div>
</div`

};

export { navbar };
