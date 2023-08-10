import React from "react";
import aboutImg from "../assets/images/about-img.gif";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about">
            <div className="heading">
                <h3 className="text-mainColor">About</h3>
                <h2>Hello there!</h2>
            </div>
            <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 mt-12">
                <motion.div
                    initial={{ y: 250, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center"
                >
                    <img src={aboutImg} alt="" />
                </motion.div>
                <motion.div
                    initial={{ y: 250, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-lg xs:text-xl text-mainColor mb-3">
                        I'm Adnan Hussain
                    </h3>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3">
                        I am a Full Stack Developer
                    </h2>
                    <p className="text-base xs:text-lg text-secondryColor mb-2">
                        A seasoned Full Stack Developer with an unquenchable
                        passion for crafting digital wonders. My dedication to
                        my craft is unwavering, and I bring a wealth of skills
                        and knowledge to the table, primed to transform your
                        project into a resounding success.
                    </p>
                    <p className="text-base xs:text-lg text-secondryColor mb-2">
                        My journey as a developer has equipped me with a diverse
                        skill set, allowing me to seamlessly navigate every
                        layer of development. From envisioning the big picture
                        to meticulously crafting the finest details, I thrive on
                        turning ideas into reality. One of my artistic outlets
                        includes sketching, which not only fuels my creativity
                        but also infuses an artistic perspective into my coding.
                    </p>
                    <p className="text-base xs:text-lg text-secondryColor mb-2">
                        I am perpetually curious, and the ever-evolving
                        landscape of technology is my playground. Exploring new
                        horizons and embracing emerging technologies is my
                        forte. My heart beats for crafting innovative web
                        solutions and pioneering products that push boundaries.
                        Beyond the realm of web, I find solace in the realms of
                        Deep Learning and Natural Language Processing, where I
                        strive to unravel the complexities and possibilities
                        that lie within.
                    </p>
                    <p className="text-base xs:text-lg text-secondryColor mb-2">
                        So, if you're seeking a Full Stack Developer who lives
                        and breathes innovation, a mind that thrives on
                        challenges, and a professional who blends creativity
                        with cutting-edge technology, then look no further. I'm
                        Adnan Hussain, and I'm here to turn your visions into
                        awe-inspiring digital realities.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
