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
    name: " 50021-Black",
    price: "Rs. 5,750",
    description:
      "Multiple external pockets, interior zip pocket Padded adjustable shoulder strap and carry handle",
    brands: "&nbsp NAM",
    key: "Two way zip opening into main compartment",
    key2: "Wipeable material for spot cleaning",
    key3: "Mesh pocket on one side",
    ProductCode: "13992809",
    image: "/brands/nam/nam/Nam Ash Training Duffle Bag Small-Black.png",
  },
  {
    id: 2,
    name: "Nam Ash Training Duffle ",
    price: "Rs. 5,750",
    description:
      "Padded adjustable shoulder strap and carry handle bottom improves water resistance",
    brands: "&nbsp NAM",
    key: "Two way zip opening into main compartment",
    key2: "Wipeable material for spot cleaning",
    key3: "Hand wash",
    ProductCode: "13992809",
    image: "/brands/nam/nam/Nam Ash Training Duffle Bag Small-Red.png",
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
    image: "/brands/nam/nam/Nam Blaster 2000 Flat Kit Bag Junior.jpg",
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
    image: "/brands/nam/nam/Nam Blaster 1000 Hard-Ball Bat.jpg",
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
    image: "/brands/nam/nam/Nam Catching Bat.jpg",
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
    image: "/brands/nam/nam/Nam GEL Cricket Bat.jpg",
  },
  {
    id: 7,
    name: "nam GEL Cricket Bat",
    price: "Rs. 9,000",
    description:
      "Double piece blade. English Willow, designed for hard hitting. Huge sweet spo",
    brands: "&nbsp NAM",
    key: "",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "139543",
    image: "/brands/nam/nam/nam Plus 12000 Cricket Bat.jpg",
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
    image: "/brands/nam/nam/NAM Plus 10000 Batting Pads.jpg",
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
    image: "/brands/nam/nam/NAM Limited Edition Cricket Bowling Machine.jpg",
  },


];
const productsPage = () => {
  //displaying products on main page.

  products.map((product, id) => {
    rootEl.innerHTML += `
        <div class="col gx-3gy-3 g-5 col-md-4 col-sm-6 col-12">
          <div class="card  card-main" " data-aos="fade-right">
          <a href="/brands/nam/product/product.html#${id + 1}">
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
              <a href="/brands/nam/product/product.html#${id + 1}">
              <button class="buy-btn"><B>View More</B></button>
      </a>
       </div>
          </div>`;
  });
};

//Calling the function to list out all the products.
productsPage();
