import React, { useContext } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import { Context } from "../assets/context/MyContext";
import { menuItem } from "../assets/data";
import pdf from "../assets/download/Adnan_Hussain_Resume.pdf";

const Navbar = () => {
  const { scrolled, toggle, setToggle } = useContext(Context);

  return (
    <header
      className={` ${
        scrolled
          ? "fixed shadow-lg bg-mainColor py-3"
          : "absolute shadow-none bg-mainColor md:bg-transparent py-4"
      } w-full z-[900]`}
    >
      <div className="container m-auto flex items-center justify-between px-3 w-full">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          onClick={() => {
            setToggle(false);
          }}
          className="text-xl xs:text-2xl font-bold static z-[100]"
        >
          Adnan Hussain
        </Link>
        <nav
          className={`${
            toggle ? "top-[52px] xs:top-[56px]" : "top-[-1000px]"
          } flex flex-col md:flex-row items-center justify-center  text-base xs:text-lg  max-h-[80vh] gap-6 lg:gap-10 py-6 md:py-0 left-0 bg-mainColor md:bg-transparent w-full md:w-auto absolute md:static overflow-auto transition-all duration-500`}
        >
          <div className="flex flex-col md:flex-row text-center gap-5 md:gap-0">
            {menuItem &&
              menuItem.map((ele) => {
                return (
                  <Link
                    to={ele.toLocaleLowerCase()}
                    id={ele}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={ele === "Home" ? -100 : -10}
                    key={ele}
                    className="relative overflow-hidden py-1 px-4 lg:px-6 link-hover"
                    onClick={(e) => {
                      setToggle(false);
                    }}
                  >
                    {ele}{" "}
                    <span
                      className={`absolute h-[3px] w-full scale-x-0 bg-white left-0 bottom-0 transition-all duration-500`}
                    ></span>
                  </Link>
                );
              })}
          </div>
          <a
            href={pdf}
            download
            className="text-mainColor transition-all duration-300 font-semibold border-[2px] border-white cursor-pointer rounded-lg bg-white py-[4px] px-[10px] lg:py-[6px] lg:px-3 hover:bg-transparent hover:text-white"
          >
            Download CV
          </a>
        </nav>

        {!toggle && (
          <MdMenu
            className="cursor-pointer Static md:hidden text-white font-bold text-3xl z-[100]"
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <MdClose
            className="cursor-pointer static md:hidden text-white font-bold text-3xl z-[100]"
            onClick={() => setToggle(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
