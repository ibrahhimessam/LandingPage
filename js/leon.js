// Section Header or NavBar || click Anwhere Outside Menu and barIcon || Change Color Background
let navContent = document.querySelector(".header");
let barIcon = document.querySelector(".header .container .links .icon");
let menu = document.querySelector(".list");

window.addEventListener("scroll", e => {
    if (window.scrollY >= 100) {
        navContent.style.backgroundColor = "#f9f9f9";
    } else if (window.scrollY == 0) {
        navContent.style.backgroundColor = "#fff";
    }
});

barIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    barIcon.classList.toggle("active");
    menu.classList.toggle("active");
});

// check for cloes Menu

document.addEventListener("click", e => {
    // click Anwhere Outside Menu and barIcon
    if (e.target !== barIcon && e.target !== menu) {
        // console.log("This is Not the Button And Not The menu");
        // check If menu Open
        if (menu.classList.contains("active")) {
            // console.log("Menu Is Open")
            // Toggle Class "active" on button
            barIcon.classList.toggle("active");
            menu.classList.toggle("active");
        }
    }
});

menu.addEventListener("click", e => {
    e.stopPropagation();
});

// Scroll All Section
    const allLinks =document.querySelectorAll(".links .list li a ");

    // console.log(allLinks);
    allLinks.forEach((link)=>{
        link.addEventListener("click", (e)=>{
            document.querySelector(e.target.dataset.section)
            .scrollIntoView({

                behavior: 'smooth'
            });
        });
    });

// _________________________________________________

// Start Landing Page

// Select Landing Element
let landingPage = document.querySelector(".landing");

// Select all Images
let landingImage = [
    "landing-1.jpg",
    "landing-2.jpg",
    "landing-3.jpg",
    "landing-4.jpg"
];
// console.log(landingImage)

// landingpae.style.backgroundImage =  "url(../Image/landing-3.jpg)"
setInterval(() => {

    // Get Random Number
    let randomNunmber = Math.floor(Math.random() * landingImage.length);

    // console.log(randomNunmber)

    // Change Bachground

    landingPage.style.backgroundImage = "url(../Image/" + landingImage[randomNunmber] + ")";

}, 10000);

// __________________________________________________________

// Select Features All items
let featDom = document.querySelector(".features .container .feat-content")
// Defirn features

let features = [{
        id: 1,
        icon: "fas fa-magic fa-3x",
        title: "Tell Us Your Idea",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut lab",
        qty: 1
    },
    {
        id: 2,
        icon: "far fa-gem fa-3x",
        title: "We Will Do All The Work",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut lab",
        qty: 1
    },
    {
        id: 3,
        icon: "fas fa-globe-asia fa-3x",
        title: "Your Product is Worldwide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut lab",
        qty: 1
    },

];

function drowFeaturesUi() {
    let featuresUi = features.map((item) => {
        return `
        <div class="feat">
            <i class="${item.icon}"></i>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>`
    });
    featDom.innerHTML = featuresUi.join(" ");

};

drowFeaturesUi()


// _____________________________________________________________



