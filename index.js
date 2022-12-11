let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
};

window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
};

let i = 0;

let arr = ["#45b8ac", "#ff6b6b", "#2e86de", "#f368e0", "#efc050", "#e2244d"];

function mainClr(){
    if(i == arr.length) i = 0;
    document.documentElement.style.setProperty("--main-clr", arr[i]);
    i++;
}

setInterval(mainClr, 10000);

// document.documentElement.style.setProperty("--main-clr", "red");

// const sr = ScrollReveal ({
//     distance: "45px",
//     duration: 2000,
//     reset: true
// })

// sr.reveal(".home-text, .about-img",{
//     delay: 350,
//     origin: "left"
// });

// sr.reveal(".home-img, .about-text",{
//     delay: 350,
//     origin: "right"
// });

// sr.reveal(".sub-services, .portfolio, .service, .cta, .contact",{
//     delay: 200,
//     origin: "bottom"
// });




// // email js need to search about that   

