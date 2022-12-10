///navba
let menu = document.querySelector("#menu-bar");
let navBar = document.querySelector(".navBar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navBar.classList.remove("active");
};

////navbar end

const productEl = document.getElementById('product-details')

//Proudcts list
const products = [
  {
    id: 1,
    name: "Puma  Golf Shoes black",
    price: "Rs. 12,750",
    description:
      "The PUMA  Golf Shoes feature super soft FUSIONFOAM that provides unrivaled energy",
    brands: "&nbsp PUMA",
    key: "Bootie construction provides step in comfort and 360 degrees of support around the foot",
    key2: "FUSIONFOAM mix of super soft EVA foam and ultra-responsive rubber provides extraordinary energy return and cushioning",
    key3: "SOFTFOAM dual-density insole provides two unique layers of cushioning for customized comfort, fit and durability",
    ProductCode: "1394545",
    image: "/brands/puma/puma/1.png",
    download:"/ALL PDF/puma/1.pdf"
  },
{
  id: 2,
  name: "Puma Golf Shoes - Navy ",
  price: "Rs. 1,250",
  description:
    "the shoe's  Fit System integrates with the laces wrap your foot for  secure, personalized.",
  brands: "&nbsp PUMA",
  key: "Two way zip opening into main compartment",
  key2: "Wipeable material for spot cleaning",
  key3: "Hand wash",
  ProductCode: "13992809",
  image: "/brands/puma/puma/2.png",
  download:"/ALL PDF/puma/2.pdf"
},

{
  id: 3,
  name: "Puma Junior Golf Shoes Orange",
  price: "Rs. 3,500",
  description:
  "Bring their performance to the next level with the PUMA shoe.  waterproof for up to 1 year.",
  brands: "&nbsp PUMA",
  key: "One main storage compartment",
  key2: "Shoulder strap",
  key3: "Ideal for junior cricket",
  ProductCode: "1395654e",
  image: "/brands/puma/puma/3.png",
  download:"/ALL PDF/puma/3.pdf"
},
{
  id: 4,
  name: "Puma Reversible Web Golf Belt",
  price: "Rs. 5,750",
  description:
    "The ultimate outfit finisher,  Puma  Web Golf Belt. It features a metal clamp buckle.",
  brands: "&nbsp PUMA",
  key: "Metal clamp buckle",
  key2: "Bottle opener on back of buckle",
  key3: "Reversible web strap",
  ProductCode: "564345",
  image: "/brands/puma/puma/4.png",
  download:"/ALL PDF/puma/4.pdf"
},
{
  id: 5,
  name: "Puma Tailored Golf Pants Blue",
  price: "Rs. 10,750",
  description:
    "The Tailored  Pant is Puma’s best tailored pant yet. fabrics that wick moisture away",
  brands: "&nbsp PUMA",
  key: "New Lighter Mesh Stretch Waistband",
  key2: "Added Freedom of Movement & Comfort",
  key3: "100% Polyester",
  ProductCode: "1395654e",
  image: "/brands/puma/puma/5.png",
  download:"/ALL PDF/puma/5.pdf"
},
{
  id: 6, 
  name: "Puma Tailored Pants Navy",
  price: "Rs. 9,750",
  description:
    "The Puma Jackpot 2.0 Tailored Pant is a stylish , slimmer fit  that is  on tour by many players",
  brands: "&nbsp PUMA",
  key: "New Lighter Mesh Stretch Waistband",
  key2: "Belt Loops & Zip Fly Opening",
  key3: "Back Welt Pockets & Front Pockets",
  ProductCode: "134434",
  image: "/brands/puma/puma/6.png",
  download:"/ALL PDF/puma/6.pdf"
},
{
  id: 7,
  name: "Puma  Golf Pants White",
  price: "Rs. 9,000",
  description:
    "The Tailored Pant is Puma’s best  pant yet. Created technical fabrics that wick moisture",
  brands: "&nbsp PUMA",
  key: "New Lighter Mesh Stretch Waistband",
  key2: "Added Freedom of Movement & Comfort",
  key3: "Flat Front Trouser",
  ProductCode: "133433",
  image: "/brands/puma/puma/7.png",
  download:"/ALL PDF/puma/7.pdf"
},



{
  id: 8,
  name: "Puma  Shoes Peacoat",
  price: "Rs. 14,000",
  description:
    "The Puma Grip Fusion Sport 2.0 Golf Shoe is the ultimate fusion of style and performance.",
  brands: "&nbsp PUMA",
  key: "provides a comfortable fit",
  key2: "Grip Comfort Last is inspired by a running last",
  key3: "Lightweight and breathable performance ",
  ProductCode: "139524",
  image: "/brands/puma/puma/8.png",
  download:"/ALL PDF/puma/8.pdf"
},
{
  id: 9,
  name: "PUMA Orange & White Shoes",
  price: "Rs. 12,000",
  description:
    "These shoes are  modern design  which includes a stylish look and latest features.",
  brands: "&nbsp PUMA",
  key: "ultra-light weight",
  key2: "micro fiber and durable mesh",
  key3: "Because of the lightweight nature",
  ProductCode: "1396543",
  image: "/brands/puma/puma/9.jpg",
  download:"/ALL PDF/puma/9.pdf"
},


];
const productDetails = () => {
  //Here we are getting hash and its value from url
  const id = location.hash[1] - 1
  
  //displaying product details on product page.
  productEl.innerHTML = `
  <div class="maincontainer">
  <div class="products">
    <!-- PRODUCT IMAGE -->
    <div class="image">
      <div class="az"><img src=${products[id].image} (1).jpg" height="100%" width="100%" alt=""></div>
    </div>
    <!-- PRODUCT DETAILS -->
    <div class="p-details">
      <div class="heading">
        <div class="p-name">
          <!-- PRODUCT NAME -->
          <h3 class="product-name">${products[id].name}</h3>
        </div>
        <div class="line">
          <hr>
        </div>
      </div>
      <div class="dis">
        <div class="brand-tittle">
          <p>Brand:</p><a class="a" href="/brands/puma/puma.html">
            <!-- BRAND NAME -->
            <p class="brand-name">${products
              [id].brands}</p>
          </a>
        </div>
      </div>
      <!-- PRODUCT CODE -->
      <div class="code">
        <p>Product Code: ${products[id]. ProductCode}</p>
      </div>
      <!-- PRODUCT PRICE -->
      <div class="price">
        <h2 class="p-price">${products[id].price}</h2>
      </div>
      <!-- QUANTITY BOX -->
      <!-- BUY BTN -->
      <div class="buy">
      <a href="${products[id].download}" download><button class="buy-btn"><B>DOWNLOAD PDF</B></button></a>
      </div>
      <!-- WHSI LIST -->
      <!-- BUTTONS -->
      <div class="btns">
        <h3 class="Description">DESCRIPION</h3>
      </div>
      <div>
        <!-- DESCRIPION -->
        <div class="f-des">
          <p>${products[id].description}
          </p>
        </div>
        <br>
        <!-- FEATURES  -->
        <div class="KEY-FEATURES">
          <h5 class="key">KEY FEATURES</h5>
          <ul class="KEY-FEATURES-UL">
            <li class="KEY-FEATURES-LI1">${products[id].key}</li>
            <li class="KEY-FEATURES-LI2">${products[id].key2}</li>
            <li class="KEY-FEATURES-LI3">${products[id].key3}</li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</div> `
}

//Calling the function to display the product details
productDetails()
//

