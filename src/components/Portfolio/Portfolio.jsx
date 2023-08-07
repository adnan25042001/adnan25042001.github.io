import React from "react";
import PortfolioItem from "./PortfolioItem";
import { portfolioList } from "../../assets/data";

const Portfolio = () => {
    return (
        <section className="wave" id="portfolio">
            <div className="heading mb-14">
                <h3>Portfolio</h3>
                <h2>My Amazing Work</h2>
            </div>
            <div className="container m-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
                {portfolioList &&
                    portfolioList.map((ele) => (
                        <PortfolioItem key={ele.id} {...ele} />
                    ))}
            </div>
        </section>
    );
};

export default Portfolio;
