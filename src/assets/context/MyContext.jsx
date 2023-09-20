import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const MyContext = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);
    return (
        <Context.Provider value={{ scrolled, setScrolled, toggle, setToggle }}>
            {children}
        </Context.Provider>
    );
};

export default MyContext;
