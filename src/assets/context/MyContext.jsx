import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const MyContext = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const click = (ele) => {
        let links = document.querySelectorAll(".link-hover span");
        links.forEach((link) => {
            link.classList.remove("active");
        });
        if (ele) {
            ele.querySelector("span").classList.add("active");
        }
    };
    useEffect(() => {
        const homeLink = document.getElementById("Home");
        click(homeLink)
    })
    return (
        <Context.Provider
            value={{ scrolled, setScrolled, toggle, setToggle, click }}
        >
            {children}
        </Context.Provider>
    );
};

export default MyContext;
