import React, { useContext, useEffect } from "react";
import Home from "./components/Home";
import Cta from "./components/Cta";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import { Context } from "./assets/context/MyContext";
import Portfolio from "./components/Portfolio/Portfolio";
import GithubCalender from "./components/GithubCalender";

const App = () => {
    const { setScrolled, click } = useContext(Context);

    useEffect(() => {
        let home = document.getElementById("home").clientHeight;
        let about = document.getElementById("about").clientHeight;
        let portfolio = document.getElementById("portfolio").clientHeight;
        let skills = document.getElementById("skills").clientHeight;
        let cta = document.getElementById("cta").clientHeight;
        let github = document.getElementById("github").clientHeight;

        const scrollFunc = () => {
            let scroll = window.scrollY;

            if (scroll > home + 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // console.log(about, home, portfolio, skills);

            if (scroll <= home) {
                const homeLink = document.getElementById("Home");
                click(homeLink);
            } else if (scroll > home && scroll <= home + about) {
                const aboutLink = document.getElementById("About");
                click(aboutLink);
            } else if (
                scroll > home + about &&
                scroll <= home + about + portfolio
            ) {
                const portfolioLink = document.getElementById("Portfolio");
                click(portfolioLink);
            } else if (
                scroll > home + about + portfolio &&
                scroll <= home + about + portfolio + skills + cta + github
            ) {
                const skillLink = document.getElementById("Skills");
                click(skillLink);
            } else if (
                scroll >
                home + about + portfolio + skills + cta + github
            ) {
                const contactLink = document.getElementById("Contact");
                click(contactLink);
            }
        };
        return window.addEventListener("scroll", scrollFunc);
    }, [window.scrollY]);

    useEffect(() => {
        let cursor = document.querySelector(".cursor");
        let timeout;

        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            cursor.style.display = "block";

            clearTimeout(timeout);

            timeout = setTimeout(mouseStopped, 1000);
        });

        document.addEventListener("mouseout", () => {
            cursor.style.display = "none";
        });

        const mouseStopped = () => {
            cursor.style.display = "none";
        };
    }, []);
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Portfolio />
            <Skills />
            <Cta />
            <GithubCalender />
            <Contact />
            <div className="cursor"></div>
        </>
    );
};

export default App;
