const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const h1 = document.querySelector("h1")
h1.innerText = "DOM Is Awesome"

const navItalic = document.querySelectorAll("nav a")
// console.log(navItalic)
navItalic.forEach(function(item){
  return item.className = "italic"
})

const anchor1 = document.querySelector("nav :nth-child(1)")
anchor1.innerText = "Services";

const anchor2 = document.querySelector("nav :nth-child(2)")
anchor2.innerText = "Product";

const anchor3 = document.querySelector("nav :nth-child(3)")
anchor3.innerText = "Vision";

const anchor4 = document.querySelector("nav :nth-child(4)")
anchor4.innerText = "Features";

const anchor5 = document.querySelector("nav :nth-child(5)")
anchor5.innerText = "About";

const anchor6 = document.querySelector("nav :nth-child(6)")
anchor6.innerText = "Contact";

const theButton = document.querySelector("button")
theButton.innerText = "Get Started"


const topPs = document.querySelectorAll(".top-content p")
topPs[0].innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topPs[1].innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const allTopContentH4 = document.querySelectorAll(".top-content h4")
allTopContentH4[0].innerText = "Features"
allTopContentH4[1].innerText = "About"

const allBottomContentH4 = document.querySelectorAll(".bottom-content h4")
allBottomContentH4[0].innerText = "Services"
allBottomContentH4[1].innerText = "Product"
allBottomContentH4[2].innerText = "Vision"


const bottomPs = document.querySelectorAll(".bottom-content p")
// console.log(bottomPs)
bottomPs[0].innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomPs[1].innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomPs[2].innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const contact = document.querySelector(".contact h4")
contact.innerText = "Contact"

const allP = document.querySelectorAll(".contact p")
allP[0].innerText = "123 Way 456 Street Somewhere, USA"
allP[1].innerText = "1 (888) 888-8888"
allP[2].innerText = "sales@greatidea.io"

const copyright = document.querySelector("footer a")
copyright.innerText = "Copyright Great Idea! 2021"
copyright.className = "bold"

const logoImg = document.getElementById("logo-img")
logoImg.src = "http://localhost:9000/img/logo.png" 
// console.log(img)

const ctaImg = document.getElementById("cta-img")
ctaImg.src = "http://localhost:9000/img/cta.png"

const accentImg = document.getElementById("middle-img")
accentImg.src = "http://localhost:9000/img/accent.png"