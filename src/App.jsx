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

        const scrollFunc = () => {
            let scroll = window.scrollY;

            if (scroll > home + 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        return window.addEventListener("scroll", scrollFunc);
    }, [window.scrollY]);

    useEffect(() => {
        let cursor = document.querySelector(".cursor");
        let timeout;

        const mouseStopped = () => {
            cursor.style.display = "none";
        };

        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            cursor.style.display = "block";

            clearTimeout(timeout);

            timeout = setTimeout(mouseStopped, 2000);
        });

        document.addEventListener("mouseout", () => {
            cursor.style.display = "none";
        });
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
