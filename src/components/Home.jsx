import React from "react";
import myImage from "../assets/images/MyImg.png";
import grass from "../assets/images/grass.png";
import pdf from "../assets/download/Adnan_Hussain_Resume.pdf";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section
            className={`bg-[url(./assets/images/star-background.jpg)] bg-no-repeat bg-cover bg-center bg-fixed relative pt-[100px] home h-full min-h-full sm:min-h-full sm:h-[100vh]`}
        >
            <div
                className="container m-auto flex flex-col-reverse sm:flex-row justify-between items-center relative h-full"
                id="home"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="home-text static w-full sm:w-[60%]"
                >
                    <h3 className="text-xl xs:text-[22px] text-mainColor mb-3">
                        Hello, I'm
                    </h3>
                    <h1 className="text-5xl xs:text-6xl md:text-7xl mb-4">
                        Adnan Hussain
                    </h1>
                    <h5 className="text-lg xs:text-xl font-medium mb-4">
                        Full Stack Developer{" "}
                        <span className="text-mainColor">from India</span>
                    </h5>
                    <p className="text-base xs:text-lg text-secondryColor">
                        I'm always interested about cool stuff. <br />
                        Are you minding a project? <br />
                        Let's talk.
                    </p>
                    <div className="social my-6 gap-8">
                        <a
                            href="https://www.linkedin.com/in/adnanhussain0425/"
                            target="_blank"
                            className="social-link bg-white text-bgColor"
                        >
                            <SiLinkedin />
                        </a>
                        <a
                            href="https://github.com/adnan25042001"
                            target="_blank"
                            className="social-link bg-white text-bgColor"
                        >
                            <SiGithub />
                        </a>
                        <a
                            href="mailto:adnan.hussain.136660@gmail.com"
                            target="_blank"
                            className="social-link bg-white text-bgColor"
                        >
                            <SiGmail />
                        </a>
                        <div>
                            <a href={pdf} className="btn" download>
                                Download CV
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center static w-[100%] mb-10 sm:w-[34%] sm:mb-0"
                >
                    <div className="image-transition bg-gradient-to-l from-purple-600 to-rose-600">
                        <img
                            src={myImage}
                            alt="myImage"
                            className="w-[180px] xs:w-[240px] md:w-[260px] transition-all transform hover:scale-100"
                        />
                        <div className="top-0 left-[14%] absolute h-full w-3 sm:w-4 bg-bgColor"></div>
                        <div className="left-0 bottom-[14%] absolute w-full h-3 sm:h-4 bg-bgColor"></div>
                    </div>
                </motion.div>
            </div>
            <img
                src={grass}
                alt="grass"
                className="absolute bottom-0 left-0 w-full bg-cover bg-no-repeat"
            />
        </section>
    );
};

export default Home;
