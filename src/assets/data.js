import bb1 from "../assets/images/portfolio/blink-blog/bb-1.png";
import bb2 from "../assets/images/portfolio/blink-blog/bb-2.png";
import bb3 from "../assets/images/portfolio/blink-blog/bb-3.png";

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

import cg1 from "../assets/images/portfolio/chatter-g/cg-1.png";
import cg2 from "../assets/images/portfolio/chatter-g/cg-2.png";
import cg3 from "../assets/images/portfolio/chatter-g/cg-3.png";

import pf1 from "../assets/images/portfolio/myPortfolio/pf-1.png";
import pf2 from "../assets/images/portfolio/myPortfolio/pf-2.png";
import pf3 from "../assets/images/portfolio/myPortfolio/pf-3.png";

import tl1 from "../assets/images/portfolio/trello/tl-1.png";
import tl2 from "../assets/images/portfolio/trello/tl-2.png";
import tl3 from "../assets/images/portfolio/trello/tl-3.png";

import html from "./images/skills/html.svg";
import css from "./images/skills/css.svg";
import js from "./images/skills/js.svg";
import java from "./images/skills/java.svg";
import react from "./images/skills/react.svg";
import node from "./images/skills/node.svg";
import next from "./images/skills/nextjs.svg";
import tailwind from "./images/skills/tailwind.png";
import spring from "./images/skills/spring.svg";
import springboot from "./images/skills/springboot.png";
import maven from "./images/skills/maven.png";
import hibernate from "./images/skills/hibernate.svg";
import mysql from "./images/skills/mysql.svg";
import mongodb from "./images/skills/mongodb.svg";
import github from "./images/skills/github.svg";
import postman from "./images/skills/postman.svg";

export const menuItem = ["Home", "About", "Portfolio", "Skills", "Contact"];

export const portfolioList = [
    {
        id: 1,
        cls: "bb",
        imgList: [bb1, bb2, bb3],
        name: "Blink Blog",
        desc: "Blink Blog: Your daily dose of insightful and concise articles covering a wide range of topics, keeping you informed and engaged.",
        tech: ["React", "Next Js", "Tailwind CSS", "TypeScript", "Sanity"],
        live: "https://blink-blog.vercel.app/",
        code: "https://github.com/adnan25042001/blink-blog",
    },
    {
        id: 2,
        cls: "s",
        imgList: [s1, s2, s3],
        name: "SKILLEX",
        desc: "Skillex is a cutting-edge e-learning platform! Embark on a journey of knowledge and skill enhancement from the comfort of your own space.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        live: "https://skillex.onrender.com/",
        code: "https://github.com/adnan25042001/legendary-succotash",
    },
    // {
    //     id: 2,
    //     cls: "bs",
    //     imgList: [bs1, bs2, bs3, bs4, bs5],
    //     name: "BIGSTORE.",
    //     desc: "BIGSTORE is a e-commerse website that is expertly curated by the best luxury fashion brands and boutiques.",
    //     tech: "React, CSS, Strapi, Stripe, Node js",
    //     live: "https://bigstore-auxi.onrender.com/",
    //     code: "https://github.com/adnan25042001/bigstore",
    // },
    {
        id: 3,
        cls: "wm",
        imgList: [wm1, wm2, wm3, wm4],
        name: "Wonder-Mania",
        desc: "Discover your dream destinations with ease. Our tour and travel website offers seamless planning, expert guides, and unforgettable experiences.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        live: "https://wonder-mania.onrender.com/",
        code: "https://github.com/adnan25042001/wonder-mania",
    },
    {
        id: 4,
        cls: "cg",
        imgList: [cg1, cg2, cg3],
        name: "Chatter-G",
        desc: "Connect and chat with anyone, anywhere, without having to worry about your messages being read by anyone else using Chatter-G.",
        tech: ["Next Js", "Tailwind CSS", "firebase"],
        live: "https://chatter-g.vercel.app/",
        code: "https://github.com/adnan25042001/chatter-G",
    },
    {
        id: 5,
        cls: "pf",
        imgList: [pf1, pf2, pf3],
        name: "Portfolio",
        desc: "A captivating digital showcase highlighting achievements, skills, and creativity, inviting exploration and connection.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://adnan-portfolio.onrender.com/",
        code: "https://github.com/adnan25042001/portfolio",
    },
    {
        id: 6,
        cls: "tl",
        imgList: [tl1, tl2, tl3],
        name: "Trello Clone",
        desc: "A Trello-inspired application designed to streamline your personal and professional life.",
        tech: ["Next Js", "TypeScript", "Tailwind CSS", "Appwrite"],
        live: "https://trello-adnan25042001.vercel.app/",
        code: "https://github.com/adnan25042001/trello",
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
    { name: "tailwind", img: tailwind },
    { name: "spring", img: spring },
    { name: "springboot", img: springboot },
    { name: "maven", img: maven },
    { name: "hibernate", img: hibernate },
    { name: "mysql", img: mysql },
    { name: "mongodb", img: mongodb },
    { name: "github", img: github },
    { name: "postman", img: postman },
];
