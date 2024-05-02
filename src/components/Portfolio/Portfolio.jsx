import React from "react";
import { portfolioList } from "../../assets/data";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  console.log(portfolioList);
  return (
    <section className="relative" id="portfolio">
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-[#9633e6] to-[#df1d48] rounded-3xl filter blur-3xl opacity-60 -z-10"></div>
      <div className="heading mb-14">
        <h3>Portfolio</h3>
        <h2>My Amazing Work</h2>
      </div>
      <div className="container m-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6">
        {portfolioList &&
          portfolioList.map((ele) => <PortfolioItem key={ele.id} {...ele} />)}
      </div>
    </section>
  );
};

export default Portfolio;
