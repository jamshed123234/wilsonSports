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
const products = [
  {
    id: 1,
    name: "Addidas H5 Holdall",
    price: "Rs. 10,750",
    description:
      "Holdall bag Addidas Outdoor Hocke with external velcro straps  hold  stick",
    brands: "Adidas",
    key: "65cm x 30cmx 25cm",
    key2: "Padded and adjustable shoulder straps which also convert into backpack straps",
    key3: "Multiple compartments to hold footwear, valuables and all other clothing and equipment",
    ProductCode: "13992809",
    image: "/images/compare images/1.jpg",
  },
  {
    id: 2,
    name: "Addidas H5 Medium",
    price: "Rs. 1, 599",
    description:
      "Stick compartment for up to six 38.5 inch sticks Clip to  the bag to a fence",
    brands: "Adidas",
    key: "100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "5634252387",
    image: "/images/compare images/2.jpg",
  },
  {
    id: 3,
    name: "Addidas Outdoor Gloves",
    price: "Rs. 1,500",
    description:
      "Get good stick grip while  Addidas Outdoor  this hockey glove.",
    brands: "Adidas",
    key: "100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "567890",
    image: "/images/compare images/3.jpg",
  },
  {
    id: 4,
    name: "Addidas VS3 Stick Sleeve ",
    price: "Rs. 1,900",
    description:
      "Stick compart mentattach the bag to a fence for up to three 38.5 inch stick.",
    brands: "Adidas",
    key: "Size: 100cm x 20cm x 8cm",
    key2: "Separate small valuables pocket",
    key3: "Adjustable single shoulder strap",
    ProductCode: "456778",
    image: "/images/compare images/4.jpg",
  },
  {
    id: 5,
    name: "Addidas VS3 Medium Stick",
    price: "Rs. 5,500",
    description:
      "Stick compartment Grip-Anthracite for up to five 38.5 inch sticks.",
    brands: "Adidas",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Adjustable padded backpack straps",
    ProductCode: "12345",
    image: "/images/compare images/5.jpg",
  },
  {
    id: 6,
    name: "Addidas VS3 Small Bag",
    price: "Rs. 5,999",
    description:
      "Addidas VS3 Small ments for clothing, equipment Hockey Stick Bag BA0361.",
    brands: "Adidas",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Separate valuables pocket Grip-Anthracite ",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "623786",
    image: "/images/compare images/6.jpg",
  },
  {
    id: 7,
    name: "Adidas Adichamois Grip-Anthracite",
    price: "Rs. 1,899",
    description:
      "Stay in control Addidas Outdoor Hocke on the field.  Wrap this adidas grip ",
    brands: "Adidas",
    key: "Ultimate grade chamois",
    key2: "3 per pack",
    key3: "adidas branding embossed onto grip",
    ProductCode: "456778",
    image: "/images/compare images/7.jpg",
  },
  {
    id: 8,
    name: "Adidas Golf Cap - Navy",
    price: "Rs. 3,000",
    description:
      "This adidas golf cap also features a large adidas 3-Stripes logo to the front along ",
    brands: "Adidas",
    key: "Men’s cap",
    key2: "Flexible peak",
    key3: "Adjustable touch and close fastener",
    ProductCode: "4675454",
    image: "/images/compare images/8.jpg",
  },
  {
    id: 9,
    name: "Addidas Grip Trainers",
    price: "Rs. 2,400",
    description:
      "Built to enhance your grip strength the adidas Professional Grip Trainer’s iron springs ",
    brands: "Adidas",
    key: "Angled design",
    key2: "Iron springs",
    key3: "Ridged grip handles",
    ProductCode: "654334",
    image: "/images/compare images/9.jpg",
  },
  {
    id: 10,
    name: "CA Plus Duffle Cricket Bag",
    price: "Rs. 2,400",
    description:
      "New Style, made of Imported D800 material. Used by professionals. Ideal  training Kit. ",
    brands: "CA",
    key: "Angled design",
    key2: "Iron springs",
    key3: "Ridged grip handles",
    ProductCode: "654334",
    image: "/images/compare images/10.jpg",
  },
  {
    id: 11,
    name: "CA 61 Cricket Shoes - Blue",
    price: "Rs. 4, 599",
    description:
      "MD and high density rubber are used in the sole for extreme durability and balance.",
    brands: "CA",
    key: "New stylish Plus 15K",
    key2: "Made of Hydrolyze High PU ",
    key3: "Molded rubber for super durability.",
    ProductCode: "56342564",
    image: "/images/compare images/11.png"
  },
  {
    id: 12,
    name: "CA Gold Cricket Helmet",
    price: "Rs. 1,300",
    description:
      "Improved full head cushioning of durable rubber and EVA compound. Power  grid.",
    brands: "CA",
    key: "100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "567890",
    image: "/images/compare images/12.jpg",
  },
  {
    id: 13,
    name: "CA Plus 3000 Kit Bag",
    price: "Rs. 1,900",
    description:
      "Made of D800 material. Wheeled kit bag for easy mobility. 2 front large pockets.",
    brands: "CA",
    key: "Size: 100cm x 20cm x 8cm",
    key2: "Separate small valuables pocket",
    key3: "Adjustable single shoulder strap",
    ProductCode: "456778",
    image: "/images/compare images/13.jpg",
  },
  {
    id: 14,
    name: "CA Plus Wicket Set",
    price: "Rs. 1,000",
    description:
      "Made of becane wood. Available in a set of  Enclosed in a nylon -parachute bag with bails.",
    brands: "CA",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Multiple separate compartments for clothing, equipment, shoes and valuables",
    key3: "Adjustable padded backpack straps",
    ProductCode: "12345",
    image: "/images/compare images/14.jpg",
  },
  {
    id: 15,
    name: "CA Vision Tape Ball Bat",
    price: "Rs. 5,999",
    description:
      "Powered by 45mm huge edge and big  spot for forceful hitting. Good pickup and balance.",
    brands: "CA",
    key: "Size: 100cm x 28cm x 20cm",
    key2: "Separate valuables pocket Grip-Anthracite ",
    key3: "Clip to attach the bag to a fence",
    ProductCode: "623786",
    image: "/images/compare images/15.jpg",
  },
  {
    id: 16,
    name: "CA Cricket Kit Bag",
    price: "Rs. 1,899",
    description:
      "Made of Imported material. Ideal for professional players. Draw string  strong nylon strap. ",
    brands: "CA",
    key: "Ultimate grade chamois",
    key2: "3 per pack",
    key3: "adidas branding embossed onto grip",
    ProductCode: "456778",
    image: "/images/compare images/16.jpg",
  },
  {
    id: 17,
    name: "CA Plus Cricket White Kit",
    price: "Rs. 3,000",
    description:
      "Made of inside cotton and outside polyester micro mesh. Breathable  heat zones. ",
    brands: "CA",
    key: "Men’s cap",
    key2: "Flexible peak",
    key3: "Adjustable touch and close fastener",
    ProductCode: "4675454",
    image: "/images/compare images/17.jpg",
  },
  {
    id: 18,
    name: "CA Wicket Keeping Pads",
    price: "Rs. 4,750",
    description:
      " CA Newly designed padding for comfortable. PU material. Extra padding and durability. ",
    brands: "CA",
    key: "65cm x 30cmx 25cm",
    key2: "Padded and adjustable shoulder straps which also convert into backpack straps",
    key3: "Multiple compartments to hold footwear, valuables and all other clothing and equipment",
    ProductCode: "139809",
    image: "/images/compare images/18.jpg",
  },
  {
    id: 19,
    name: "50021-Black",
    price: "Rs. 5,750",
    description:
      "Multiple external pockets, interior zip pocket Padded adjustable shoulder strap and carry handle",
    brands: "NAM",
    key: "Two way zip opening into main compartment",
    key2: "Wipeable material for spot cleaning",
    key3: "Mesh pocket on one side",
    ProductCode: "13992809",
    image: "/images/compare images/10.png",
  },
  {
    id: 20,
    name: "Nam Ash Training Duffle ",
    price: "Rs. 5,750",
    description:
      "Padded adjustable shoulder strap and carry handle bottom improves water resistance",
    brands: "NAM",
    key: "Two way zip opening into main compartment",
    key2: "Wipeable material for spot cleaning",
    key3: "Hand wash",
    ProductCode: "13992809",
    image: "/images/compare images/20.jpg",
  },
  {
    id: 21,
    name: "Nam Blaster 1000 Hard-Ball Bat",
    price: "Rs. 5,750",
    description:
      " unior Hard Ball Bat Hard Ball Junior Gloves Cricket Kit Bag Junior Helmet ",
    brands: "NAM",
    key: "One main storage compartment",
    key2: "Shoulder strap",
    key3: "Ideal for junior cricket",
    ProductCode: "1395654e",
    image: "/images/compare images/21.jpg",
  },
  {
    id: 22,
    name: "Nam Hard-Ball Bat",
    price: "Rs. 5,750",
    description:
      " adjustable shoulder strap and carry handle Co Padded adjustable shoulder strap and",
    brands: "NAM",
    key: "Not being significantly dented nor splintering on the impact of a cricket ball",
    key2: "Not being significantly dented nor splintering on the impact of a cricket ball",
    key3: "Type: Kashmir Willow",
    ProductCode: "1395654e",
    image: "/images/compare images/22.jpg",
  },
  {
    id: 23,
    name: "Nam Catching Bat",
    price: "Rs. 10,750",
    description:
      " This bat is having a reasonable ap and carry handle Coated price so it can be accessible  ",
    brands: "NAM",
    key: "Used by professional coaches for field and catching practice ",
    key2: "Lightweight",
    key3: "High quality foam for exceptional power",
    ProductCode: "1395654e",
    image: "/images/compare images/23.jpg",
  },
  {
    id: 24,
    name: "nam Plus 20000 haed bat",
    price: "Rs. 9,750",
    description:
      " Providing increased ball capacity, increased performance and a sleek look ",
    brands: "NAM",
    key: "Includes automatic 18 ball feeder",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "139578",
    image: "/images/compare images/24.jpg",
  },
  {
    id: 25,
    name: "nam GEL Cricket Bat",
    price: "Rs. 9,000",
    description:
      "Double piece blade. English Willow, designed for hard hitting. Huge sweet spo",
    brands: "NAM",
    key: "Rubber guard housing armour",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "139543",
    image: "/images/compare images/27.jpg",
  },
  {
    id: 26,
    name: "nam legpad",
    price: "Rs. 12,000",
    description:
      " Molded pads, super light weight. Made of EVA Foam, especially crafted for international  ",
    brands: "NAM",
    key: "",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "139543",
    image: "/images/compare images/26.jpg",
  },
  {
    id: 27,
    name: "NAM Bowling Machine",
    price: "Rs. 50,000",
    description:
      " Molded pads, super light weight. Made of international players",
    brands: "NAM",
    key: "Includes automatic 18 ball feeder",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "1396543",
    image: "/images/compare images/25.jpg",
  },
  {
    id: 28,
    name: "Puma Golf Shoes black",
    price: "Rs. 12,750",
    description:
      "The PUMA  Golf Shoes feature super soft FUSIONFOAM that provides unrivaled energy",
    brands: "PUMA",
    key: "Bootie construction provides step in comfort and 360 degrees of support around the foot",
    key2: "FUSIONFOAM mix of super soft EVA foam and ultra-responsive rubber provides extraordinary energy return and cushioning",
    key3: "SOFTFOAM dual-density insole provides two unique layers of cushioning for customized comfort, fit and durability",
    ProductCode: "1394545",
    image: "/images/compare images/28.png",
  },
  {
    id: 29,
    name: "Puma Golf Shoes - Navy ",
    price: "Rs. 1,250",
    description:
      "the shoe's  Fit System integrates with the laces wrap your foot for  secure, personalized.",
    brands: "PUMA",
    key: "Two way zip opening into main compartment",
    key2: "Wipeable material for spot cleaning",
    key3: "Hand wash",
    ProductCode: "13992809",
    image: "/images/compare images/29.png",
  },
  {
    id: 30,
    name: "Puma Junior Golf Shoes Orange",
    price: "Rs. 3,500",
    description:
      "Bring their performance to the next level with the PUMA shoe.  waterproof for up to 1 year.",
    brands: "PUMA",
    key: "One main storage compartment",
    key2: "Shoulder strap",
    key3: "Ideal for junior cricket",
    ProductCode: "1395654e",
    image: "/images/compare images/30.png",
  },
  {
    id: 31,
    name: "Puma Reversible Web Golf Belt",
    price: "Rs. 5,750",
    description:
      "The ultimate outfit finisher,  Puma  Web Golf Belt. It features a metal clamp buckle.",
    brands: "PUMA",
    key: "Metal clamp buckle",
    key2: "Bottle opener on back of buckle",
    key3: "Reversible web strap",
    ProductCode: "564345",
    image: "/images/compare images/31.png",
  },
  {
    id: 32,
    name: "Puma Tailored Golf Pants Blue",
    price: "Rs. 10,750",
    description:
      "The Tailored  Pant is Puma’s best tailored pant yet. fabrics that wick moisture away",
    brands: "PUMA",
    key: "New Lighter Mesh Stretch Waistband",
    key2: "Added Freedom of Movement & Comfort",
    key3: "100% Polyester",
    ProductCode: "1395654e",
    image: "/images/compare images/32.png",
  },
  {
    id: 33,
    name: "Puma Tailored Pants Navy",
    price: "Rs. 9,750",
    description:
      "The Puma Jackpot 2.0 Tailored Pant is a stylish , slimmer fit  that is  on tour by many players",
    brands: "PUMA",
    key: "New Lighter Mesh Stretch Waistband",
    key2: "Belt Loops & Zip Fly Opening",
    key3: "Back Welt Pockets & Front Pockets",
    ProductCode: "134434",
    image: "/images/compare images/33.png",
  },
  {
    id: 34,
    name: "Puma Golf Pants White",
    price: "Rs. 9,000",
    description:
      "The Tailored Pant is Puma’s best  pant yet. Created technical fabrics that wick moisture",
    brands: "PUMA",
    key: "New Lighter Mesh Stretch Waistband",
    key2: "Added Freedom of Movement & Comfort",
    key3: "Flat Front Trouser",
    ProductCode: "133433",
    image: "/images/compare images/34.png",
  },
  {
    id: 35,
    name: "Puma  Shoes Peacoat",
    price: "Rs. 14,000",
    description:
      "The Puma Grip Fusion Sport 2.0 Golf Shoe is the ultimate fusion of style and performance.",
    brands: "PUMA",
    key: "provides a comfortable fit",
    key2: "Grip Comfort Last is inspired by a running last",
    key3: "Lightweight and breathable performance ",
    ProductCode: "139524",
    image: "/images/compare images/35.png",
  },
  {
    id: 36,
    name: "PUMA Orange & White Shoes",
    price: "Rs. 12,000",
    description:
      "These shoes are  modern design  which includes a stylish look and latest features.",
    brands: "PUMA",
    key: "ultra-light weight",
    key2: "micro fiber and durable mesh",
    key3: "Because of the lightweight nature",
    ProductCode: "1396543",
    image: "/images/compare images/36.jpg",
  },
  {
    id: 37,
    name: "Under Armour Golf Shirt Grey",
    price: "Rs. 5,750",
    description:
      "This Under Armour Perform Polo Shirt is crafted with a fold over collar",
    brands: "Under armour",
    key: "Polo shirt",
    key2: "Fold over collar",
    key3: "3 button fastening placket",
    ProductCode: "13992809",
    image: "/images/compare images/37.jpg",
  },
  {
    id: 38,
    name: "Under Armour Golf96 Cap Grey",
    price: "Rs. 3,000",
    description:
      "This lightweight and comfortable golf cap has been constructed with a woven fabric material",
    brands: "under armour",
    key: "lightweight",
    key2: "comforable",
    key3: " classic fit",
    ProductCode: "13994532",
    image: "/images/compare images/36.png",
  },
  {
    id: 39,
    name: "Armour  Golf Cap Academy",
    price: "Rs.3,000",
    description:
      "Allow the Under Armour Headline 3.0 Men’s Golf Cap its comfort feel.",
    brands: "under armour",
    key: "Under Armour branding",
    key2: "Cold Black technology",
    key3: "Curved peak",
    ProductCode: "1395654e",
    image: "/images/compare images/39.jpg",
  },
  {
    id: 40,
    name: "Armour Golf Cap - Black",
    price: "Rs. 3,750",
    description:
      "Allow this Headline Mens Golf Cap  its fashionable design and comfort feel",
    brands: "under armour",
    key: "Men's Cap",
    key2: "Under Armour branding",
    key3: "Elasticated edge",
    ProductCode: "1395643",
    image: "/images/compare images/30.png",
  },
  {
    id: 41,
    name: "Driver 3.0 Golf Cap - Black",
    price: "Rs. 10,750",
    description:
      " This bat is having a reasonable ap and carry handle Coated price so it can be accessible  ",
    brands: "under armour",
    key: "Used by professional coaches for field and catching practice ",
    key2: "Lightweight",
    key3: "High quality foam for exceptional power",
    ProductCode: "1395654e",
    image: "/images/compare images/41.jpg",
  },
  {
    id: 42,
    name: "Under Armour Golf Cap - Black",
    price: "Rs. 9,750",
    description:
      "Get the cap you've seen on Tour wtih the Under Armour Spieth Tour 2.0 golf hat!. ",
    brands: "under armour",
    key: " fast-drying fabric",
    key2: "Embroidered Jordan Spieth logo on back",
    key3: "100% Polyester",
    ProductCode: "1334578",
    image: "/images/compare images/42.jpg",
  },
  {
    id: 43,
    name: "Armour HeatGear Golf Shirts",
    price: "Rs. 2,000",
    description:
      "Under Armour is golf's clothing best kept secret don't miss out on these fantastic polo shirts",
    brands: "under armour",
    key: " Updated performance fit",
    key2: "Machine washable 30degree",
    key3: " Easy care-ironing not required",
    ProductCode: "13945345",
    image: "/images/compare images/43.jpg",
  },
  {
    id: 44,
    name: "Armour Golf Glove Academy",
    price: "Rs. 2,650",
    description:
      "UA Tour Cool fabric pulls heat from your skin, so you  feel coolerSold as a single glove",
    brands: "under armour",
    key: "Micro perforations increase ventilation",
    key2: "Material wicks sweat & dries really fast",
    key3: "Premium Grip system gives you maximum control",
    ProductCode: "1342543",
    image: "/images/compare images/44.png",
  },
  {
    id: 45,
    name: "Under Armour Golf Glove Grey",
    price: "Rs. 1,500",
    description:
      " Molded pads, super light weight. Made of international players",
    brands: "under armour",
    key: "Includes automatic 18 ball feeder",
    key2: "Exclusive 3G Drive System",
    key3: "Rubber guard housing armour",
    ProductCode: "1396543",
    image: "/images/compare images/45.png",
  },
];
products.forEach((products) => {
  console.log(products.name);
});

const btn1 = document.getElementById("btn1");
const ProductDetails1 = document.getElementById("ProductDetails1");
const inputEl1 = document.getElementById("Input1");

btn1.addEventListener("click", () => {
  let Input1 = inputEl1.value
  let Input2 = inputEl2.value

  if(inputEl1.value==""){
    return alert("please fill input feld")
  }
  if(Input1 == Input2){
    return alert ("select onther")
    
  }
  let searchProduct = (products) => {

    let product = products.filter(product => {
      return (product.name.trim().toLocaleLowerCase().includes(Input1.toLowerCase()))
    })

    if (product.length == 0) {
      return alert("not found")
    }
    return product[0]
  }
  let product = searchProduct(products)
  ProductDetails1.innerHTML = ` <img class="img" src="${product.image}" alt="img is here">     
       <h1 class="ProductName">${product.name}</h1>        
       <h1 class="BrandName">${product.brands}</h1>      
       <h1 class="ProdductPrice">${product.price}</h1> 
       <h1 class="KeyFeatures">KEY FEATURES</h1> 
       <ul class="ProductUl">
           <li class="ProductLi">${product.key}</li>
           <li>${product.key2}</li>
           <li>${product.key3}</li>
       </ul>`;
})
const btn2 = document.getElementById("btn2");
const ProductDetails2 = document.getElementById("ProductDetails2");
const inputEl2 = document.getElementById("Input2");

btn2.addEventListener("click", () => {
  let Input2 = inputEl2.value
  let Input1= inputEl1.value
 
  if(inputEl2.value==""){
    return alert("please fill input feld")
  }
  if(Input1==Input2){
    return alert("select onther")
  }
  
  let searchProduct = (products) => {

    let product = products.filter(product => {
      return (product.name.trim().toLocaleLowerCase().includes(Input2.toLowerCase()))

    })
    // console.log(product[1])
    if (product.length == 0) {
      return alert("not found")
    }
    return product[0]
  }
  let product = searchProduct(products)
  ProductDetails2.innerHTML = ` <img class="img" src="${product.image}" alt="img is here">     
       <h1 class="ProductName">${product.name}</h1>        
       <h1 class="BrandName">${product.brands}</h1>      
       <h1 class="ProdductPrice">${product.price}</h1> 
       <h1 class="KeyFeatures">KEY FEATURES</h1> 
       <ul class="ProductUl">
           <li class="ProductLi">${product.key}</li>
           <li>${product.key2}</li>
           <li>${product.key3}</li>
       </ul>`;
})