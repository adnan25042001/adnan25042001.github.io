import { motion } from "framer-motion";
import React from "react";
import ImageSlider from "./ImageSlider";

const PortfolioItem = ({ imgList, name, desc, tech, live, code, cls }) => {
    return (
        <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg shadow-md hover:shadow-xl bg-white text-black overflow-hidden flex flex-col"
        >
            <ImageSlider imgList={imgList} cls={cls} />
            <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-xl xs:text-2xl font-bold text-mainColor mb-3">
                        {name}
                    </h2>
                    <p className="text-base xs:text-lg mb-1 text-gray-800">
                        {desc}
                    </p>
                    <p className="text-mainColor font-semibold mb-3">
                        Tech Stacks :-{" "}
                        <span className="text-base xs:text-lg text-gray-800 font-medium">
                            {tech.join(", ")}
                        </span>
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <a
                        href={live}
                        target="_blank"
                        className="text-white transition-all duration-300 font-semibold border-[2px] border-mainColor rounded-lg bg-mainColor py-[4px] px-4 lg:py-[6px] lg:px-5 hover:bg-transparent hover:text-mainColor"
                    >
                        Live
                    </a>
                    <a
                        href={code}
                        target="_blank"
                        className="text-white transition-all duration-300 font-semibold border-[2px] border-mainColor rounded-lg bg-mainColor py-[4px] px-4 lg:py-[6px] lg:px-5 hover:bg-transparent hover:text-mainColor"
                    >
                        Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioItem;
