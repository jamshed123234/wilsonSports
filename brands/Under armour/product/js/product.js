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
    name: "Under Armour Golf Shirt Grey",
    price: "Rs. 5,750",
    description:
      "This Under Armour Perform Polo Shirt is crafted with a fold over collar",
    brands: "&nbsp under armour",
    key: "Polo shirt",
    key2: "Fold over collar",
    key3: "3 button fastening placket",
    ProductCode: "13992809",
    image: "./productsImages/1.jpg",
    download:"/ALL PDF/under armour/1.pdf"
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
    image:"./productsImages/2.jpg",
    download:"/ALL PDF/under armour/2.pdf"
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
    image: "./productsImages/3.jpg",
    download:"/ALL PDF/under armour/3.pdf"
  },
  {
    id: 4,
    name: " Armour Under Golf Cap - Black",
    price: "Rs. 3,750",
    description:"Allow this Headline Mens Golf Cap from Under Armour its fashionable design and comfort feel",
    brands: "&nbsp under armour",
    key: "Men's Cap",
    key2: "Under Armour branding",
    key3: "Elasticated edge",
    ProductCode: "1395643",
    image: "./productsImages/4.png",
    download:"/ALL PDF/under armour/4.pdf"
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
    image: "./productsImages/5.jpg",
    download:"/ALL PDF/under armour/5.pdf"
  },
  {
    id: 6, 
    name: "Under Armour Golf Cap - Black",
    price: "Rs. 9,750",
    description:
      "Get the cap you've seen on Tour wtih the Under Armour Spieth Tour 2.0 golf hat! It's comfortable, ",
    brands: "&nbsp under armour",
    key: " fast-drying fabric",
    key2: "Embroidered Jordan Spieth logo on back",
    key3: "100% Polyester",
    ProductCode: "1334578",
    image: "./productsImages/6.jpg",
    download:"/ALL PDF/under armour/6.pdf"
  },
  {
    id: 7,
    name: "Under Armour HeatGear Golf Shirts",
    price: "Rs. 2,000",
    description:
      "Under Armour is golf's clothing best kept secret don't miss out on these fantastic polo shirts",
    brands: "&nbsp under armour",
    key: " Updated performance fit",
    key2: "Machine washable 30degree",
    key3: " Easy care-ironing not required",
    ProductCode: "13945345",
    image: "./productsImages/7.jpg",
    download:"/ALL PDF/under armour/7.pdf"
  },
  {
    id: 8,
    name: "Armour Iso Golf Glove - Academy",
    price: "Rs. 2,650",
    description:
      "UA Tour Cool fabric pulls heat away from your skin, so you actually feel coolerSold as a single glove",
    brands: "&nbsp under armour",
    key: "Micro perforations increase ventilation",
    key2: "Material wicks sweat & dries really fast",
    key3: "Premium Grip system gives you maximum control",
    ProductCode: "1342543",
    image: "./productsImages/8.png",
    download:"/ALL PDF/under armour/8.pdf"
  },
  {
    id: 9,
    name: " Armour Iso Golf Glove - Grey",
    price: "Rs. 1,500",
    description:
      " Molded pads, super light weight. Made of international players",
    brands: "&nbsp under armour",
    key: "Includes automatic 18 ball feeder",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "1396543",
    image: "./productsImages/9.png",
    download:"/ALL PDF/under armour/9.pdf"
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
          <p>Brand:</p><a class="a" href="/brands/Under armour/Under Armour.html">
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

