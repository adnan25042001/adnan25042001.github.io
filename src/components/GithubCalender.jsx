import { motion } from "framer-motion";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubCalender = () => {
    return (
        <section id="github">
            <div className="heading mb-14">
                <h3 className="text-mainColor">Github</h3>
                <h2>Calander & Stats</h2>
            </div>
            <div className="container m-auto flex flex-col items-center justify-center gap-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hidden xs:block"
                >
                    <GitHubCalendar username="adnan25042001" />
                </motion.div>
                <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    href="https://github.com/adnan25042001"
                    target="_blank"
                    className="px-6"
                >
                    <img
                        loading="lazy"
                        className="border border-gray-400 rounded-md shadow-md shadow-mainColor hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-mainColor"
                        src="https://github-readme-streak-stats.herokuapp.com?user=adnan25042001&amp;theme=transparent&amp;hide_border=true&amp;ring=8d2de2&amp;background=020912&amp;currStreakLabel=8d2de2&amp;fire=FF0000&amp;currStreakNum=ffffff&amp;sideNums=ffffff&amp;currStreakLabel=ffffff&amp;sideLabels=ffffff&amp;dates=e4e4e4"
                        alt=""
                    />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    href="https://github.com/adnan25042001"
                    target="_blank"
                    className="px-6"
                >
                    <img
                        loading="lazy"
                        className="border border-gray-400 rounded-md shadow-md shadow-mainColor hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-mainColor"
                        src="https://github-readme-stats.vercel.app/api?username=adnan25042001&amp;show_icons=true&amp;locale=en&amp;theme=tranparent&amp;hide_border=true&amp;text_color=ffffff&amp;title_color=8d2de2&amp;bg_color=020912&amp;icon_color=8d2de2"
                        alt=""
                    />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    href="https://github.com/adnan25042001"
                    target="_blank"
                    className="px-6"
                >
                    <img
                        loading="lazy"
                        className="border border-gray-400 rounded-md shadow-md shadow-mainColor hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-mainColor"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=adnan25042001&amp;theme=transparent&amp;text_color=ffffff&amp;hide_border=true&amp;title_color=8d2de2"
                    />
                </motion.a>
            </div>
        </section>
    );
};

export default GithubCalender;
