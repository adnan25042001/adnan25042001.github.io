import s1 from "../assets/images/portfolio/skillex/s-1.png";
import s2 from "../assets/images/portfolio/skillex/s-2.png";
import s3 from "../assets/images/portfolio/skillex/s-3.png";

import bs1 from "../assets/images/portfolio/bigstore/bs-1.png";
import bs2 from "../assets/images/portfolio/bigstore/bs-2.png";
import bs3 from "../assets/images/portfolio/bigstore/bs-3.png";
import bs4 from "../assets/images/portfolio/bigstore/bs-4.png";
import bs5 from "../assets/images/portfolio/bigstore/bs-5.png";

import wm1 from "../assets/images/portfolio/wonder-mania/wm-1.png";
import wm2 from "../assets/images/portfolio/wonder-mania/wm-2.png";
import wm3 from "../assets/images/portfolio/wonder-mania/wm-3.png";
import wm4 from "../assets/images/portfolio/wonder-mania/wm-4.png";

import html from "./images/skills/html.svg";
import css from "./images/skills/css.svg";
import js from "./images/skills/js.svg";
import java from "./images/skills/java.svg";
import react from "./images/skills/react.svg";
import node from "./images/skills/node.svg";
import next from "./images/skills/nextjs.svg";
import vite from "./images/skills/vite.svg";
import tailwind from "./images/skills/tailwind.png";
import bootstrap from "./images/skills/bootstrap.svg";
import spring from "./images/skills/spring.svg";
import springboot from "./images/skills/springboot.png";
import maven from "./images/skills/maven.png";
import hibernate from "./images/skills/hibernate.svg";
import mysql from "./images/skills/mysql.svg";
import mongodb from "./images/skills/mongodb.svg";
import github from "./images/skills/github.svg";
import postman from "./images/skills/postman.svg";
import netlify from "./images/skills/netlify.svg";

export const menuItem = ["Home", "About", "Portfolio", "Skills", "Contact"];

export const portfolioList = [
    {
        id: 1,
        imgList: [s1, s2, s3],
        name: "SKILLEX",
        desc: "Skillex is a cutting-edge e-learning platform! Embark on a journey of knowledge and skill enhancement from the comfort of your own space.",
        tech: "React, Tailwind CSS, NodeJs",
        live: "https://skillex.onrender.com/",
        code: "https://github.com/adnan25042001/legendary-succotash",
    },
    {
        id: 2,
        imgList: [bs1, bs2, bs3, bs4, bs5],
        name: "BIGSTORE.",
        desc: "BIGSTORE is a e-commerse website that is expertly curated by the best luxury fashion brands and boutiques.",
        tech: "React, CSS, Strapi, Stripe, NodeJs",
        live: "https://bigstore-auxi.onrender.com/",
        code: "https://github.com/adnan25042001/bigstore",
    },
    {
        id: 3,
        imgList: [wm1, wm2, wm3, wm4],
        name: "Wonder-Mania",
        desc: "Discover your dream destinations with ease. Our tour and travel website offers seamless planning, expert guides, and unforgettable experiences.",
        tech: "React, Tailwind CSS, NodeJs",
        live: "https://wonder-mania.onrender.com/",
        code: "https://github.com/adnan25042001/wonder-mania",
    },
];

export const skillList = [
    { name: "html", img: html },
    { name: "css", img: css },
    { name: "javascript", img: js },
    { name: "Java", img: java },
    { name: "react", img: react },
    { name: "node js", img: node },
    { name: "next js", img: next },
    { name: "vite js", img: vite },
    { name: "tailwind", img: tailwind },
    { name: "bootstrap", img: bootstrap },
    { name: "spring", img: spring },
    { name: "springboot", img: springboot },
    { name: "maven", img: maven },
    { name: "hibernate", img: hibernate },
    { name: "mysql", img: mysql },
    { name: "mongodb", img: mongodb },
    { name: "github", img: github },
    { name: "postman", img: postman },
    { name: "netlify", img: netlify },
];
