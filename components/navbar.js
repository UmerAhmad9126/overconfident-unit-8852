

const navbar = () => {
  return`<div id="top">
               <p>Delivering in Mumbai, Delhi and Gurugram | Same day delivery!</p>
          </div>
<div id="menu">
     <div id="dropdown">
          <ul>
               <li><a href="">SHOP <i class="fa-solid fa-caret-down"></i></a>
                    <ul>
                         <li>ALL FRUITS</li>
                         <li>ALL VEGGIES</li>
                         <li>FRESH CUTS</li>
                         <li>FRUIT COMBOS</li>
                         <li>GIFTS BY KIMAYE</li>
                         <li>FRUITS X SUBSCRIPTION</li>
                         <li>COMMUNITY BUYING</li>
                    </ul>
               </li>
               <li><a href="">LEARN <i class="fa-solid fa-caret-down"></i></a>
                    <ul>
                         <li>OUR STORY</li>
                         <li>WHY KIMAYE</li>
                         <li>TRACEABILITY</li>
                         <li>BEYOND FRUITS</li>
                    </ul>
               </li>
               <li><a href="">GROW</a></li>
          </ul>
     </div>
     <div id="logo">
          <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1614326029" alt="logo">
     </div>
     <div id="funtn">
          <div><img src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png" alt="location"><span></span></div>
          <div><i class="fa-solid fa-magnifying-glass"></i>
          
          <div><input type="text" id="search" placeholder="Search for product"><button>Search</button></div> </div>
          <div><i class="fa-solid fa-user"></i></div>
          <div><i class="fa-solid fa-bag-shopping"></i></div>
          <span class="cart_add">0</span>
     </div>
</div`

};

export { navbar };
