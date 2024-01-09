import React from "react";
import { motion } from "framer-motion";

const Cta = () => {
    const container = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };
    const item = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    return (
        <motion.section
            className="relative w-full"
            variants={container}
            initial="hidden"
            whileInView="visible"
            id="cta"
        >
            <motion.div
                initial={{skewY: 6}}
                whileInView={{skewY: -6}}
                transition={{duration: 0.5}}
                className="absolute inset-0 w-full h-full bg-gradient -z-20"
            ></motion.div>
            <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center text-center">
                <motion.div className="cta-box" variants={item}>
                    <h3 className="font-bold text-2xl mb-3">1500+</h3>
                    <p className="text-lg">Hours of coding</p>
                </motion.div>
                <motion.div className="cta-box" variants={item}>
                    <h3 className="font-bold text-2xl mb-3">300+</h3>
                    <p className="text-lg">DSA questions</p>
                </motion.div>
                <motion.div className="cta-box" variants={item}>
                    <h3 className="font-bold text-2xl mb-3">20+</h3>
                    <p className="text-lg">Finished projects</p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Cta;
