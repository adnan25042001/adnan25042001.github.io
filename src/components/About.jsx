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
                    <p className="text-base xs:text-lg text-secondryColor">
                        I'm very passionate and dedicated to my work. I have
                        acquired the skills and knowledge necessary to make your
                        project a success. I like to create sketches and I'm
                        always curious to learn more about new technologies and
                        creative coding.
                        <br />
                        My field of interest are building new Web Technologies
                        and Products and also in areas related to Deep Learning
                        and Natural Launguage Processing.
                        <br />I have clear, logical mind with a practical
                        approach to problem-solving and a drive to see things
                        through to completion. I have work experience in
                        multiple project and clone project with team
                        collaboration.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
