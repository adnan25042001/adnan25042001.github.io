import React from "react";
import Footer from "./Footer";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { db } from "../assets/firebase";
import { doc, setDoc } from "firebase/firestore";
import { uid } from "uid";
import { motion } from "framer-motion";

const Contact = () => {
    const submitForm = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

        console.log(name, email, message);

        if (name.trim() == "" || name.length < 3) {
            alert("Please enter your name");
            return;
        }

        if (
            email.trim() === "" ||
            email.length <= 11 ||
            email.slice(email.length - 10, email.length) !== "@gmail.com"
        ) {
            alert("Please enter your email");
            return;
        }

        if (message.trim() === "") {
            alert("Please write your message");
            return;
        }

        await setDoc(doc(db, "messages", uid()), {
            name,
            email,
            message,
        });
    };

    return (
        <section
            className="contact-bg bg-no-repeat bg-cover bg-center bg-mainColor bg-opacity-40 py-20"
            id="contact"
        >
            <div className="container bg-gray-100 mx-auto text-black rounded-md shadow-bs px-6 py-4 xs:px-10 xs:py-8">
                <div className="heading text-mainColor mb-8">
                    <h3>Contact</h3>
                </div>
                <div className="flex justify-between items-center gap-12 flex-col-reverse sm:flex-row">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="contact-after w-full sm:w-[25%] h-full shrink-0 pr-2 relative flex flex-wrap gap-10 justify-center items-center"
                    >
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <BsTelephoneFill className="text-bgColor text-2xl" />
                            <div className="text-lg font-semibold">Phone</div>
                            <p className="text-base text-gray-700 font-medium">
                                +91 8586857610
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <MdLocationOn className="text-bgColor text-4xl" />
                            <div className="text-lg font-semibold">Address</div>
                            <p className="text-base text-gray-700 font-medium">
                                New Delhi, India
                            </p>
                        </div>
                        <div className="social gap-4">
                            <a
                                href="https://www.linkedin.com/in/adnanhussain0425/"
                                target="_blank"
                                className="social-link c-link after:bg-bgColor bg-icon text-white"
                            >
                                <SiLinkedin />
                            </a>
                            <a
                                href="https://github.com/adnan25042001"
                                target="_blank"
                                className="social-link c-link after:bg-bgColor bg-icon text-white"
                            >
                                <SiGithub />
                            </a>
                            <a
                                href="mailto:adnan.hussain.136660@gmail.com"
                                target="_blank"
                                className="social-link c-link after:bg-bgColor bg-icon text-white"
                            >
                                <SiGmail />
                            </a>
                        </div>
                    </motion.div>
                    <div className="w-full sm:w-[75%]">
                        <h2 className="text-xl xs:text-2xl sm:text-3xl text-mainColor font-bold mb-3">
                            Send me a message
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 font-medium">
                            I enthusiastically welcome conversations about
                            freelancing or full-time roles. Please don't
                            hesitate to reach out through your preferred
                            communication channel. Let's connect and explore
                            exciting opportunities together!
                        </p>
                        <motion.form
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col mt-4 gap-3 items-start"
                            onSubmit={submitForm}
                        >
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="bg-slate-200 w-full px-5 py-2 rounded-md text-lg"
                            />
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="bg-slate-200 w-full px-5 py-2 rounded-md text-lg"
                            />
                            <textarea
                                id="message"
                                type="text"
                                placeholder="Enter your message"
                                rows="4"
                                className="bg-slate-200 w-full px-5 py-2 rounded-md text-lg resize-none"
                            ></textarea>
                            <input
                                id="tbtn"
                                type="submit"
                                value="Send Now"
                                className="text-white text-lg transition-all duration-300 font-semibold border-[2px] border-mainColor cursor-pointer rounded-lg bg-mainColor py-[6px] px-4 lg:py-2 lg:px-5 hover:bg-transparent hover:text-mainColor"
                            />
                        </motion.form>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Contact;
