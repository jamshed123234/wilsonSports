/////////
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
const productEl = document.getElementById('product-details')

//Proudcts list
const products = [
  {
    id: 1,
    name: "CA Plus Duffle Cricket Kit Bag",
    price: "Rs. 2,400",
    description:
      "New Style, made of Imported D800 material. Used by professionals. Ideal  training Kit. ",
    brands: "&nbsp CA",
    key: "Angled design",
    key2: "Iron springs",
    key3: "Ridged grip handles",
    ProductCode: "654334",
    image: "/brands/ca/ca/9.jpg",
    download: "/ALL PDF/CA/1.pdf",
  },
  {
    id: 2,
    name: "CA 6116 Cricket Shoes - Blue",
    price: "Rs. 4, 599",
    description:
      "MD and high density rubber are used in the sole for extreme durability and balance.",
    brands: "&nbsp CA",
    key: "New stylish Plus 15K",
    key2: "Made of Hydrolyze High PU ",
    key3: "Molded rubber for super durability.",
    ProductCode: "56342564",
    image: "/brands/ca/ca/2.png",
    download: "/ALL PDF/CA/2.pdf",
  },
  {
    id: 3,
    name: "CA Gold Cricket Helmet",
    price: "Rs. 1,300",
    description:
      "Improved full head cushioning of durable rubber and EVA compound. Power  grid.",
    brands: "&nbsp CA",
    key: "100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "567890",
    image: "/brands/ca/ca/3.jpg",
    download: "/ALL PDF/CA/3.pdf",
  },
  {
    id: 4,
    name: "CA Plus 3000 Kit Bag",
    price: "Rs. 1,900",
    description:
      "Made of D800 material. Wheeled kit bag for easy mobility. 2 front large pockets.",
    brands: "&nbsp CA",
    key: "Size: 100cm x 20cm x 8cm",
    key2: "Separate small valuables pocket",
    key3: "Adjustable single shoulder strap",
    ProductCode: "456778",
    image: "/brands/ca/ca/4.jpg",
    download: "/ALL PDF/CA/4.pdf",
  },
  {
    id: 5,
    name: "CA Plus Wicket Set",
    price: "Rs. 1,000",
    description:
      "Made of becane wood. Available in a set of  Enclosed in a nylon -parachute bag with bails.",
    brands: "&nbsp CA",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Adjustable padded backpack straps",
    ProductCode: "12345",
    image: "/brands/ca/ca/5.jpg",
    download: "/ALL PDF/CA/5.pdf",
  },
  {
    id: 6,
    name: "CA Vision Tape Ball Bat",
    price: "Rs. 5,999",
    description: "Powered by 45mm huge edge and big  spot for forceful hitting. Good pickup and balance.",
    brands: "&nbsp CA",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Separate valuables pocket Grip-Anthracite ",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "623786",
    image: "/brands/ca/ca/6.jpg",
    download: "/ALL PDF/CA/6.pdf",
  },
  {
    id: 7,
    name: "CA  Cricket Kit Bag",
    price: "Rs. 1,899",
    description: "Made of Imported material. Ideal for professionals. Draw string  strong nylon strap. ",
    brands: "&nbsp CA",
    key: "Ultimate grade chamois",
    key2: "3 per pack",
    key3: "adidas branding embossed onto grip",
    ProductCode: "456778",
    image: "/brands/ca/ca/7.jpg",
    download: "/ALL PDF/CA/7.pdf",
  },
  {
    id: 8,
    name: "CA Plus  Cricket White Kit",
    price: "Rs. 3,000",
    description:
      "Made of inside cotton and outside polyester micro mesh. Breathable  heat zones. ",
    brands: "&nbsp CA",
    key: "Men’s cap",
    key2: "Flexible peak",
    key3: "Adjustable touch and close fastener",
    ProductCode: "4675454",
    image: "/brands/ca/ca/8.jpg",
    download: "/ALL PDF/CA/8.pdf",
  },
  
  {
    id: 9,
    name: "CA  Wicket Keeping Pads",
    price: "Rs. 4,750",
    description: "Newly designed padding for comfort. PU material. Extra padding and durability. ",
    brands: "&nbsp CA",
    key: "65cm x 30cmx 25cm",
    key2: "Padded and adjustable shoulder straps which also convert into backpack straps",
    key3: "Multiple compartments to hold footwear, valuables and all other clothing and equipment",
    ProductCode: "139809",
    image: "/brands/ca/ca/1.jpg",
    download: "/ALL PDF/CA/9.pdf",
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
          <p>Brand:</p><a class="a" href="/brands/ca/ca.html">
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