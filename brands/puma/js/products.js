///navbar start////
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navBar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
}




///navbar end////
const rootEl = document.getElementById("root");

//Proudcts list
const products = [
    {
      id: 1,
      name: "Puma  Golf Shoes black",
      price: "Rs. 12,750",
      description:
        "The PUMA  Golf Shoes feature super soft FUSIONFOAM that provides unrivaled energy",
      brands: "&nbsp NAM",
      key: "Bootie construction provides step in comfort and 360 degrees of support around the foot",
      key2: "FUSIONFOAM mix of super soft EVA foam and ultra-responsive rubber provides extraordinary energy return and cushioning",
      key3: "SOFTFOAM dual-density insole provides two unique layers of cushioning for customized comfort, fit and durability",
      ProductCode: "1394545",
      image: "/brands/puma/puma/1.png",
    },
  {
    id: 2,
    name: "Puma Golf Shoes - Navy ",
    price: "Rs. 1,250",
    description:
      "the shoe's  Fit System integrates with the laces wrap your foot for  secure, personalized.",
    brands: "&nbsp NAM",
    key: "Two way zip opening into main compartment",
    key2: "Wipeable material for spot cleaning",
    key3: "Hand wash",
    ProductCode: "13992809",
    image: "/brands/puma/puma/2.png",
  },

  {
    id: 3,
    name: "Puma Junior Golf Shoes Orange",
    price: "Rs. 3,500",
    description:
      "Bring their performance to the next level with the PUMA shoe.  waterproof for up to 1 year.",
    brands: "&nbsp NAM",
    key: "One main storage compartment",
    key2: "Shoulder strap",
    key3: "Ideal for junior cricket",
    ProductCode: "1395654e",
    image: "/brands/puma/puma/3.png",
  },
  {
    id: 4,
    name: "Puma Reversible Web Golf Belt",
    price: "Rs. 5,750",
    description:
      "The ultimate outfit finisher,  Puma  Web Golf Belt. It features a metal clamp buckle.",
    brands: "&nbsp NAM",
    key: "Metal clamp buckle",
    key2: "Bottle opener on back of buckle",
    key3: "Reversible web strap",
    ProductCode: "564345",
    image: "/brands/puma/puma/4.png",
  },
  {
    id: 5,
    name: "Puma Tailored Golf Pants Blue",
    price: "Rs. 10,750",
    description:
      "The Tailored  Pant is Puma’s best tailored pant yet. fabrics that wick moisture away",
    brands: "&nbsp NAM",
    key: "New Lighter Mesh Stretch Waistband",
    key2: "Added Freedom of Movement & Comfort",
    key3: "100% Polyester",
    ProductCode: "1395654e",
    image: "/brands/puma/puma/5.png",
  },
  {
    id: 6, 
    name: "Puma Tailored Pants Navy",
    price: "Rs. 9,750",
    description:
      "The Puma Jackpot 2.0 Tailored Pant is a stylish , slimmer fit  that is  on tour by many players",
    brands: "&nbsp NAM",
    key: "New Lighter Mesh Stretch Waistband",
    key2: "Belt Loops & Zip Fly Opening",
    key3: "Back Welt Pockets & Front Pockets",
    ProductCode: "134434",
    image: "/brands/puma/puma/6.png",
  },
  {
    id: 7,
    name: "Puma  Golf Pants White",
    price: "Rs. 9,000",
    description:
      "The Tailored Pant is Puma’s best  pant yet. Created technical fabrics that wick moisture",
    brands: "&nbsp NAM",
    key: "New Lighter Mesh Stretch Waistband",
    key2: "Added Freedom of Movement & Comfort",
    key3: "Flat Front Trouser",
    ProductCode: "133433",
    image: "/brands/puma/puma/7.png",
  },



  {
    id: 8,
    name: "Puma  Shoes Peacoat",
    price: "Rs. 14,000",
    description:
      "The Puma Grip Fusion Sport 2.0 Golf Shoe is the ultimate fusion of style and performance.",
    brands: "&nbsp NAM",
    key: "provides a comfortable fit",
    key2: "Grip Comfort Last is inspired by a running last",
    key3: "Lightweight and breathable performance ",
    ProductCode: "139524",
    image: "/brands/puma/puma/8.png",
  },
  {
    id: 9,
    name: "PUMA Orange & White Shoes",
    price: "Rs. 12,000",
    description:
      "These shoes are  modern design  which includes a stylish look and latest features.",
    brands: "&nbsp NAM",
    key: "ultra-light weight",
    key2: "micro fiber and durable mesh",
    key3: "Because of the lightweight nature",
    ProductCode: "1396543",
    image: "/brands/puma/puma/9.jpg",
  },


];
const productsPage = () => {
  //displaying products on main page.

  products.map((product, id) => {
    rootEl.innerHTML += `
        <div class="col gx-3gy-3 g-5 col-md-4 col-sm-6 col-12">
          <div class="card  card-main" " data-aos="fade-right">
          <a href="/brands/puma/product/product.html#${id + 1}">
          <img src="${
            product.image
          }" alt="" height="100%" width="100%">
          </a>
          <div class="img-overlay">
            <div class="card-body">
              <h5 class="card-title card-h">${product.name}</h5>
              <p class="card-text card-t">
                ${product.description}
              </p>
              <div class="divBtn">
              <a href="/brands/puma/product/product.html#${id + 1}">
              <button class="buy-btn"><B>View More</B></button>
      </a>
       </div>
          </div>`;
  });
};

//Calling the function to list out all the products.
productsPage();
