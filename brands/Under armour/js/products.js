///navbar start////
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navBar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navBar.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navBar.classList.remove('active');
}




///navbar end////
const rootEl = document.getElementById("root");

//Proudcts list
const products = [
  {
    id: 1,
    name: "Under Armour Golf Shirt Grey",
    price: "Rs. 5,750",
    description:
      "This Under Armour Perform Polo Shirt is crafted with a fold over collar",
    brands: "&nbsp under armour",
    key: "Polo shirt",
    key2: "Fold over collar",
    key3: "3 button fastening placket",
    ProductCode: "13992809",
    image: "/brands/Under armour/Under armour/1.jpg",
  },
  {
    id: 2,
    name: "Under Armour Golf96 Cap Grey",
    price: "Rs. 3,000",
    description:
      "This lightweight and comfortable golf cap has been constructed with a woven fabric material",
    brands: "&nbsp under armour",
    key: "lightweight",
    key2: "comforable",
    key3: " classic fit",
    ProductCode: "13994532",
    image: "/brands/Under armour/Under armour/2.png",
  },

  {
    id: 3,
    name: "Armour  Golf Cap Academy",
    price: "Rs.3,000",
    description:
      "Allow the Under Armour Headline 3.0 Men’s Golf Cap its comfort feel.",
    brands: "&nbsp under armour",
    key: "Under Armour branding",
    key2: "Cold Black technology",
    key3: "Curved peak",
    ProductCode: "1395654e",
    image: "/brands/Under armour/Under armour/3.jpg",
  },
  {
    id: 4,
    name: "Armour Golf Cap - Black",
    price: "Rs. 3,750",
    description: "Allow this Headline Mens Golf Cap  its fashionable design and comfort feel",
    brands: "&nbsp under armour",
    key: "Men's Cap",
    key2: "Under Armour branding",
    key3: "Elasticated edge",
    ProductCode: "1395643",
    image: "/brands/Under armour/Under armour/4.png",
  },
  {
    id: 5,
    name: "Driver 3.0 Golf Cap - Black",
    price: "Rs. 10,750",
    description:
      " This bat is having a reasonable ap and carry handle Coated price so it can be accessible  ",
    brands: "&nbsp under armour",
    key: "Used by professional coaches for field and catching practice ",
    key2: "Lightweight",
    key3: "High quality foam for exceptional power",
    ProductCode: "1395654e",
    image: "/brands/Under armour/Under armour/5.jpg",
  },
  {
    id: 6,
    name: "Under Armour Golf Cap - Black",
    price: "Rs. 9,750",
    description:
      "Get the cap you've seen on Tour wtih the Under Armour Spieth Tour 2.0 golf hat!. ",
    brands: "&nbsp under armour",
    key: " fast-drying fabric",
    key2: "Embroidered Jordan Spieth logo on back",
    key3: "100% Polyester",
    ProductCode: "1334578",
    image: "/brands/Under armour/Under armour/6.jpg",
  },
  {
    id: 7,
    name: " Armour HeatGear Golf Shirts",
    price: "Rs. 2,000",
    description:
      "Under Armour is golf's clothing best kept secret don't miss out on these fantastic polo shirts",
    brands: "&nbsp under armour",
    key: " Updated performance fit",
    key2: "Machine washable 30degree",
    key3: " Easy care-ironing not required",
    ProductCode: "13945345",
    image: "/brands/Under armour/Under armour/7.jpg",
  },



  {
    id: 8,
    name: "Armour Golf Glove Academy",
    price: "Rs. 2,650",
    description:
      "UA Tour Cool fabric pulls heat from your skin, so you  feel coolerSold as a single glove",
    brands: "&nbsp under armour",
    key: "Micro perforations increase ventilation",
    key2: "Material wicks sweat & dries really fast",
    key3: "Premium Grip system gives you maximum control",
    ProductCode: "1342543",
    image: "/brands/Under armour/Under armour/8.png",
  },
  {
    id: 9,
    name: "Under Armour Golf Glove Grey",
    price: "Rs. 1,500",
    description:
      " Molded pads, super light weight. Made of international players",
    brands: "&nbsp under armour",
    key: "Includes automatic 18 ball feeder",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "1396543",
    image: "/brands/Under armour/Under armour/9.png",
  },


];
const productsPage = () => {
  //displaying products on main page.

  products.map((product, id) => {
    rootEl.innerHTML += `
        <div class="col gx-3gy-3 g-5 col-md-4 col-sm-6 col-12">
          <div class="card  card-main" " data-aos="fade-right">
          <a href="/brands/Under armour/product/product.html#${id + 1}">
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
              <a href="/brands/Under armour/product/product.html#${id + 1}">
              <button class="buy-btn"><B>View More</B></button>
      </a>
       </div>
          </div>`;
  });
};

//Calling the function to list out all the products.
productsPage();