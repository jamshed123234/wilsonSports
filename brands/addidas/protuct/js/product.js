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

//products list
const products = [
    {
      id: 1,
      name: "Addidas H5 Holdall BA0357",
      price: "Rs. 10,750",
      description:
        "Holdall bag with external velcro straps to hold one stick",
      brands: "&nbsp Adidas",
      key: "65cm x 30cmx 25cm",
      key2: "Padded and adjustable shoulder straps which also convert into backpack straps",
      key3: "Multiple compartments to hold footwear, valuables and all other clothing and equipment",
      ProductCode: "13992809",
      image: "/brands/addidas/protuct/adidas/1.jpg",
      download:"/ALL PDF/Adidas/1.pdf",
    },
    {
      id: 2,
      name: "Addidas H5 Medium Stick Bag BA0353",
      price: "Rs. 1, 599",
      description:
        "Stick compartment for up to six 38.5 inch sticks Clip to attach the bag to a fence",
      brands: "&nbsp Adidas",
      key: "100cm x 28cm x 20cm",
      key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
      key3: "Clip to attach the bag to a fence",
      ProductCode: "5634252387",
      image: "/brands/addidas/protuct/adidas/2.jpg",
      download:"/ALL PDF/Adidas/2.pdf",
    },
    {
      id: 3,
      name: "Addidas Outdoor Hockey Gloves",
      price: "Rs. 1,500",
      description:
        "Get good stick grip while protecting your knuckles with this hockey glove.",
      brands: "&nbsp Adidas",
      key: "100cm x 28cm x 20cm",
      key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
      key3: "Clip to attach the bag to a fence",
      ProductCode: "567890",
      image: "/brands/addidas/protuct/adidas/3.jpg",
      download:"/ALL PDF/Adidas/3.pdf",
    },
    {
      id: 4,
      name: "Addidas VS3 Hockey Stick Sleeve BA0367",
      price: "Rs. 1,900",
      description:
        "Stick compartment for up to three 38.5 inch stick.",
      brands: "&nbsp Adidas",
      key: "Size: 100cm x 20cm x 8cm",
      key2: "Separate small valuables pocket",
      key3: "Adjustable single shoulder strap",
      ProductCode: "456778",
      image: "/brands/addidas/protuct/adidas/4.jpg",
      download:"/ALL PDF/Adidas/4.pdf",
    },
    {
      id: 5,
      name: "Addidas VS3 Medium Hockey Stick BA0359",
      price: "Rs. 5,500",
      description:
        "Stick compartment for up to five 38.5 inch sticks.",
      brands: "&nbsp Adidas",
      key: "Size: 100cm x 28cm x 20cm",
      key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
      key3: "Adjustable padded backpack straps",
      ProductCode: "12345",
      image: "/brands/addidas/protuct/adidas/5.jpg",
      download:"/ALL PDF/Adidas/5.pdf",
    },
    {
      id: 6,
      name: "Addidas VS3 Small Hockey Stick Bag BA0361",
      price: "Rs. 5,999",
      description:
        "Addidas VS3 Small Hockey Stick Bag BA0361.",
      brands: "&nbsp Adidas",
      key: "Size: 100cm x 28cm x 20cm",
      key2: "Separate valuables pocket and additional small compartment",
      key3: "Clip to attach the bag to a fence",
      ProductCode: "623786",
      image: "/brands/addidas/protuct/adidas/6.jpg",
      download:"/ALL PDF/Adidas/6.pdf",
    },
    {
      id: 7,
      name: "Adidas Adichamois Grip-Anthracite (3 Pack)",
      price: "Rs. 1,899",
      description:
        "Stay in control on the field. Wrap this adidas grip ",
      brands: "&nbsp Adidas",
      key: "Ultimate grade chamois",
      key2: "3 per pack",
      key3: "adidas branding embossed onto grip",
      ProductCode: "456778",
      image: "/brands/addidas/protuct/adidas/7.jpg",
      download:"/ALL PDF/Adidas/7.pdf",
    },
    {
      id: 8,
      name: "Adidas Golf Cap - Navy",
      price: "Rs. 3,000",
      description:
        "This adidas golf cap also features a large adidas 3-Stripes logo to the front along with a small logo",
      brands: "&nbsp Adidas",
      key: "Men’s cap",
      key2: "Flexible peak",
      key3: "Adjustable touch and close fastener",
      ProductCode: "4675454",
      image: "/brands/addidas/protuct/adidas/8.jpg",
      download:"/ALL PDF/Adidas/8.pdf",
    },
    {
      id: 9,
      name: "Adidas Professional Grip Trainers",
      price: "Rs. 2,400",
      description:
        "Built to enhance your grip strength the adidas Professional Grip Trainer’s iron springs ",
      brands: "&nbsp Adidas",
      key: "Angled design",
      key2: "Iron springs",
      key3: "Ridged grip handles",
      ProductCode: "654324",
      image: "/brands/addidas/protuct/adidas/9.jpg",
      download:"/ALL PDF/Adidas/9.pdf",
    },
  ];

//This function is only for displaying single product details.
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
          <p>Brand:</p><a class="a" href="/brands/addidas/addidas.html">
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
