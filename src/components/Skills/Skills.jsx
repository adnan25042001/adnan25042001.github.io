import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { skillList } from "../../assets/data";

const Skills = () => {
    const container = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            },
        },
    };
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            id="skills"
        >
            <div className="heading mb-14">
                <h3 className="text-mainColor">skills</h3>
                <h2>Technologies I've learned</h2>
            </div>
            <div className="container m-auto flex flex-wrap items-center justify-center w-full gap-10">
                {skillList &&
                    skillList.map((skill) => {
                        return <Skill key={skill.img} skill={skill} />;
                    })}
            </div>
        </motion.section>
    );
};

export default Skills;
