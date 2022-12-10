//navbar start//
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

///navbar end///
const rootEl = document.getElementById("root");

//Proudcts list
const products = [
  {
    id: 1,
    name: "Addidas H5 Holdall ",
    price: "Rs. 10,750",
    description: "Holdall bag Addidas Outdoor Hocke with external velcro straps  hold  stick",
    brands: "&nbsp Adidas",
    key: "65cm x 30cmx 25cm",
    key2: "Padded and adjustable shoulder straps which also convert into backpack straps",
    key3: "Multiple compartments to hold footwear, valuables and all other clothing and equipment",
    ProductCode: "13992809",
    image: "/brands/addidas/adidas/Addidas H5 Holdall BA0357.jpg",
  },
  {
    id: 2,
    name: "Addidas H5 Medium ",
    price: "Rs. 1, 599",
    description:
      "Stick compartment for up to six 38.5 inch sticks Clip to  the bag to a fence",
    brands: "&nbsp Adidas",
    key: "100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "5634252387",
    image: "/brands/addidas/adidas/Addidas H5 Medium Stick Bag BA0353.jpg",
  },
  {
    id: 3,
    name: "Addidas Outdoor Gloves",
    price: "Rs. 1,500",
    description:
      "Get good stick grip while  Addidas Outdoor  this hockey glove.",
    brands: "&nbsp Adidas",
    key: "100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "567890",
    image: "/brands/addidas/adidas/Addidas Outdoor Hockey Gloves.jpg",
  },
  {
    id: 4,
    name: "Addidas VS3  Stick Sleeve ",
    price: "Rs. 1,900",
    description:
      "Stick compart mentattach the bag to a fence for up to three 38.5 inch stick.",
    brands: "&nbsp Adidas",
    key: "Size: 100cm x 20cm x 8cm",
    key2: "Separate small valuables pocket",
    key3: "Adjustable single shoulder strap",
    ProductCode: "456778",
    image: "/brands/addidas/adidas/Addidas VS3 Hockey Stick Sleeve BA0367.jpg",
  },
  {
    id: 5,
    name: "Addidas VS3 Medium  Stick ",
    price: "Rs. 5,500",
    description:
      "Stick compartment Grip-Anthracite for up to five 38.5 inch sticks.",
    brands: "&nbsp Adidas",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Adjustable padded backpack straps",
    ProductCode: "12345",
    image: "/brands/addidas/adidas/Addidas VS3 Medium Hockey Stick BA0359.jpg",
  },
  {
    id: 6,
    name: "Addidas VS3 Small Bag",
    price: "Rs. 5,999",
    description: "Addidas VS3 Small ments for clothing, equipment Hockey Stick Bag BA0361.",
    brands: "&nbsp Adidas",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Separate valuables pocket Grip-Anthracite ",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "623786",
    image: "/brands/addidas/adidas/Addidas VS3 Small Hockey Stick Bag BA0361.jpg",
  },
  {
    id: 7,
    name: "Adidas Adichamois Grip-Anthracite",
    price: "Rs. 1,899",
    description: "Stay in control Addidas Outdoor Hocke on the field.  Wrap this adidas grip ",
    brands: "&nbsp Adidas",
    key: "Ultimate grade chamois",
    key2: "3 per pack",
    key3: "adidas branding embossed onto grip",
    ProductCode: "456778",
    image: "/brands/addidas/adidas/Adidas Adichamois Grip-Anthracite (3 Pack).jpg",
  },
  {
    id: 8,
    name: "Adidas Golf Cap - Navy",
    price: "Rs. 3,000",
    description:
      "This adidas golf cap also features a large adidas 3-Stripes logo to the front along ",
    brands: "&nbsp Adidas",
    key: "Men’s cap",
    key2: "Flexible peak",
    key3: "Adjustable touch and close fastener",
    ProductCode: "4675454",
    image: "/brands/addidas/adidas/Adidas Golf Cap - Navy.jpg",
  },
  {
    id: 9,
    name: "Adidas  Grip Trainers",
    price: "Rs. 2,400",
    description:
      "Built to enhance your grip strength the adidas Professional Grip Trainer’s iron springs ",
    brands: "&nbsp Adidas",
    key: "Angled design",
    key2: "Iron springs",
    key3: "Ridged grip handles",
    ProductCode: "654334",
    image: "/brands/addidas/adidas/Adidas Professional Grip Trainers.jpg",
  },
];


// yahan hum products ko list kar rahe hein main products page par..
const productsPage = () => {
  //displaying products on main page.

  products.forEach((product, id) => {
    rootEl.innerHTML += `

        <div class="col gx-3gy-3 g-5 col-md-4 col-sm-6 col-12">
          <div class="card  card-main" " data-aos="fade-up">
          <a href="/brands/ca/protuct/product.html#${id + 1}">
          <img src="${
            product.image
          }" alt="" height="100%" width="100%">
          </a>
          <div class="img-overlay">
            <div class="card-body">
              <h5 class="card-title card-h img-tittle">${product.name}</h5>
              <p class="card-text card-t  img-discription">
                ${product.description}
              </p>
              <div class="btn-block">
        <a href="/brands/addidas/protuct/product.html#${id + 1}">
        <button class="buy-btn">VIEW MORE</button>
        </a>
        </div>
       </div>
       </div>
       </div>
          </div>`;
  });
};

//Calling the function to list out all the products.
productsPage();