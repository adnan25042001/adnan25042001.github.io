import { motion } from "framer-motion";
import React from "react";

const Skill = ({ skill }) => {
    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    return (
        <motion.div className="skill" variants={item}>
            <img
                loading="lazy"
                src={skill.img}
                alt={skill.name}
                className="w-[45%] mb-3"
            />
            <p className="text-sm uppercase">{skill.name}</p>
            <div className="after absolute w-full h-full right-[100%] transition-all duration-300 bg-icon -z-10"></div>
        </motion.div>
    );
};

export default Skill;
