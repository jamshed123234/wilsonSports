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
    name: "CA Plus Duffle Cricket Kit Bag",
    price: "Rs. 2,400",
    description:
      "New Style, made of Imported D800 material. Used by professionals. Ideal  training Kit. ",
    brands: "&nbsp Adidas",
    key: "Angled design",
    key2: "Iron springs",
    key3: "Ridged grip handles",
    ProductCode: "654334",
    image: "/brands/ca/ca/9.jpg",
  },
  {
    id: 2,
    name: "CA 6116 Cricket Shoes - Blue",
    price: "Rs. 4, 599",
    description:
      "MD and high density rubber are used in the sole for extreme durability and balance.",
    brands: "&nbsp Adidas",
    key: "New stylish Plus 15K",
    key2: "Made of Hydrolyze High PU ",
    key3: "Molded rubber for super durability.",
    ProductCode: "56342564",
    image: "/brands/ca/ca/2.png",
  },
  {
    id: 3,
    name: "CA Gold Cricket Helmet",
    price: "Rs. 1,300",
    description:
      "Improved full head cushioning of durable rubber and EVA compound. Power  grid.",
    brands: "&nbsp Adidas",
    key: "100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "567890",
    image: "/brands/ca/ca/3.jpg",
  },
  {
    id: 4,
    name: "CA Plus 3000 Kit Bag",
    price: "Rs. 1,900",
    description:
      "Made of D800 material. Wheeled kit bag for easy mobility. 2 front large pockets.",
    brands: "&nbsp Adidas",
    key: "Size: 100cm x 20cm x 8cm",
    key2: "Separate small valuables pocket",
    key3: "Adjustable single shoulder strap",
    ProductCode: "456778",
    image: "/brands/ca/ca/4.jpg",
  },
  {
    id: 5,
    name: "CA Plus Wicket Set",
    price: "Rs. 1,000",
    description:
      "Made of becane wood. Available in a set of  Enclosed in a nylon -parachute bag with bails.",
    brands: "&nbsp Adidas",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Adjustable padded backpack straps",
    ProductCode: "12345",
    image: "/brands/ca/ca/5.jpg",
  },
  {
    id: 6,
    name: "CA Vision Tape Ball Bat",
    price: "Rs. 5,999",
    description: "Powered by 45mm huge edge and big  spot for forceful hitting. Good pickup and balance.",
    brands: "&nbsp Adidas",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Separate valuables pocket Grip-Anthracite ",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "623786",
    image: "/brands/ca/ca/6.jpg",
  },
  {
    id: 7,
    name: "CA  Cricket Kit Bag",
    price: "Rs. 1,899",
    description: "Made of Imported material. Ideal for professionals. Draw string  strong nylon strap. ",
    brands: "&nbsp Adidas",
    key: "Ultimate grade chamois",
    key2: "3 per pack",
    key3: "adidas branding embossed onto grip",
    ProductCode: "456778",
    image: "/brands/ca/ca/7.jpg",
  },
  {
    id: 8,
    name: "CA Plus  Cricket White Kit",
    price: "Rs. 3,000",
    description:
      "Made of inside cotton and outside polyester micro mesh. Breathable  heat zones. ",
    brands: "&nbsp Adidas",
    key: "Men’s cap",
    key2: "Flexible peak",
    key3: "Adjustable touch and close fastener",
    ProductCode: "4675454",
    image: "/brands/ca/ca/8.jpg",
  },
  
  {
    id: 9,
    name: "CA  Wicket Keeping Pads",
    price: "Rs. 4,750",
    description: "Newly designed padding for comfort. PU material. Extra padding and durability. ",
    brands: "&nbsp Adidas",
    key: "65cm x 30cmx 25cm",
    key2: "Padded and adjustable shoulder straps which also convert into backpack straps",
    key3: "Multiple compartments to hold footwear, valuables and all other clothing and equipment",
    ProductCode: "139809",
    image: "/brands/ca/ca/1.jpg",
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
        <a href="/brands/ca/protuct/product.html#${id + 1}">
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