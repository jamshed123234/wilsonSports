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

//products list
const products = [
  {
    id: 1,
    name: " 50021-Black",
    price: "Rs. 5,750",
    description:
      "Multiple external pockets, interior zip pocket Padded adjustable shoulder strap and carry handle",
    brands: "&nbsp NAM",
    key: "Two way zip opening into main compartment",
    key2: "Wipeable material for spot cleaning",
    key3: "Mesh pocket on one side",
    ProductCode: "13992809",
    image: "/brands/nam/product/imges/1.png",
    download:"/ALL PDF/N A M/1.pdf"
  },
  {
    id: 2,
    name: "Nam Ash Training Duffle ",
    price: "Rs. 5,750",
    description:
      "Padded adjustable shoulder strap and carry handle Coated bottom improves water resistance",
    brands: "&nbsp NAM",
    key: "Two way zip opening into main compartment",
    key2: "Wipeable material for spot cleaning",
    key3: "Hand wash",
    ProductCode: "13992809",
    image: "/brands/nam/product/imges/2.png",
    download:"/ALL PDF/N A M/2.pdf"
  },
  
  {
    id: 3,
    name: "Nam Blaster 1000 Hard-Ball Bat",
    price: "Rs. 5,750",
    description:
      " unior Hard Ball Bat Hard Ball Junior Gloves Cricket Kit Bag Junior Helmet ",
    brands: "&nbsp NAM",
    key: "One main storage compartment",
    key2: "Shoulder strap",
    key3: "Ideal for junior cricket",
    ProductCode: "1395654e",
    image: "/brands/nam/product/imges/3.jpg",
    download:"/ALL PDF/N A M/3.pdf"
    
  },
  {
    id: 4,
    name: "Nam  Hard-Ball Bat",
    price: "Rs. 5,750",
    description:
      " adjustable shoulder strap and carry handle Co Padded adjustable shoulder strap and",
    brands: "&nbsp NAM",
    key: "Not being significantly dented nor splintering on the impact of a cricket ball",
    key2: "Not being significantly dented nor splintering on the impact of a cricket ball",
    key3: "Type: Kashmir Willow",
    ProductCode: "1395654e",
    image: "/brands/nam/product/imges/4.jpg",
    download:"/ALL PDF/N A M/4.pdf"
  },
  {
    id: 5,
    name: "Nam Catching Bat",
    price: "Rs. 10,750",
    description:
      " This bat is having a reasonable ap and carry handle Coated price so it can be accessible  ",
    brands: "&nbsp NAM",
    key: "Used by professional coaches for field and catching practice ",
    key2: "Lightweight",
    key3: "High quality foam for exceptional power",
    ProductCode: "1395654e",
    image: "/brands/nam/product/imges/5.jpg",
    download:"/ALL PDF/N A M/5.pdf"
  },
  {
    id: 6, 
    name: "nam Plus 20000 haed bat",
    price: "Rs. 9,750",
    description:
      " Providing increased ball capacity, increased performance and a sleek look ",
    brands: "&nbsp NAM",
    key: "Includes automatic 18 ball feeder",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "139578",
    image: "/brands/nam/product/imges/6.jpg",
    download:"/ALL PDF/N A M/6.pdf"
  },
  {
    id: 7,
    name: "nam GEL Cricket Bat",
    price: "Rs. 9,000",
    description:
      "Double piece blade. English Willow, designed for hard hitting. Huge sweet spo",
    brands: "&nbsp NAM",
    key: "Ligt Weigt",
    key2: "Exclusive 3G Drive System",
    key3: "Ideal for junior cricket",
    ProductCode: "139543",
    image: "/brands/nam/product/imges/ok.jpg",
    download:"/ALL PDF/N A M/7.pdf"
  },  
  {
    id: 8,
    name: "nam legpad ",
    price: "Rs. 12,000",
    description:
      " Molded pads, super light weight. Made of EVA Foam, especially crafted for international  ",
    brands: "&nbsp NAM",
    key: "",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "139543",
    image: "/brands/nam/product/imges/8.jpg",
    download:"/ALL PDF/N A M/8.pdf"
  },
  {
    id: 9,
    name: " NAM   Bowling Machine",
    price: "Rs. 50,000",
    description:
      " Molded pads, super light weight. Made of international players",
    brands: "&nbsp NAM",
    key: "Includes automatic 18 ball feeder",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "1396543",
    image: "/brands/nam/product/imges/9.jpg",
    download:"/ALL PDF/N A M/9.pdf"
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
          <p>Brand:</p><a class="a" href="/brands/nam/nam.html">
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

