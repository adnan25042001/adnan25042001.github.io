let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
};

const sr = ScrollReveal({
    distance: "15px",
    duration: 2000,
    reset: true,
});

sr.reveal(".home-text, .about-img", {
    delay: 200,
    origin: "left",
});

sr.reveal(".home-img, .about-text", {
    delay: 200,
    origin: "right",
});

sr.reveal(
    ".sub-services, .portfolio, .service, .cta, .skills, .github, .contact",
    {
        delay: 200,
        origin: "bottom",
    }
);
