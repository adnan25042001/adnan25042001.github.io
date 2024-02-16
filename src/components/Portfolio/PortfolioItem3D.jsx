import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

var MouseEnterContext = createContext(undefined);

const PortfolioItem3D = ({ children, className, containerClassName }) => {
    const containerRef = useRef(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } =
            containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = (e) => {
        setIsMouseEntered(true);
        if (!containerRef.current) return;
    };

    const handleMouseLeave = (e) => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    return <div></div>;
};

export default PortfolioItem3D;
