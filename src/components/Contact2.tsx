import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Contact2 = () => {
  return (
    <div id="contact" className="bg-gray-100 overflow-hidden rounded-t-[60px]">
      <div className="container mx-auto text-black px-6">
        <div className="border-b border-bgColor">
          <h2 className="text-[12vw] tracking-tight text-center font-modak footer-heading -mb-10 mt-8 whitespace-nowrap">
            adnan hussain
          </h2>
        </div>
        <div className="flex pt-2 pb-40">
          <div className="font-footerText font-medium my-3">
            All rights reserved
          </div>
          <div className="flex-1 flex flex-col items-end">
            <a
              href="mailto:adnan.hussain.136660@gmail.com"
              target="_blank"
              className="font-footerText font-medium my-3 hover:font-bold transition-all"
            >
              adnan.hussain.136660@gmail.com
            </a>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
