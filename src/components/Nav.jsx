import { FaBars } from "react-icons/fa";
// import { useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Nav = ({ toggle }) => {
  return (
    <>
      <nav >
        <div className="bg-brandNavy h-20 flex justify-center items-center text-sm sticky top-0 z-20">
          {/* Nav Container */}
          <div className="flex justify-between h-20 z-10 w-full p-6 max-w-screen-xl">
            {/* logo */}
            <LinkRouter
              className="flex items-center justify-center justify-self-start text-xs ml-6 font-bold"
              to="/"
            >
              <div>
                <h1 className="text-brandLavender ">LOGO</h1>
              </div>
            </LinkRouter>
            {/* logo */}

            {/* Mobile Icon */}
            <div className="lg:hidden block absolute top-0 right-0 translate-y-full mr-4 cursor-pointer">
              <FaBars
                onClick={toggle}
                size="25"
                className="text-brandLightYellow"
              ></FaBars>
            </div>
            {/* Mobile Icon */}

            {/* Nav Menu */}
            <ul className="lg:flex items-center text-center align-middle -mr-6 hidden">
              {/* Nav Item */}
              <li className="h-20">
                {/* Nav Links */}
                <LinkScroll
                  to="about"
                  className="text-white mr-8 flex align-middle items-center p-0 h-full cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >
                  {" "}
                  About{" "}
                </LinkScroll>
                {/* Nav Links */}
              </li>
              {/* Nav Item */}
              {/* Nav Item */}
              <li className="h-20">
                {/* Nav Links */}
                <LinkScroll
                  to="discover"
                  className="text-white mr-8 flex align-middle items-center p-0 h-full cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >
                  {" "}
                  Discover{" "}
                </LinkScroll>
                {/* Nav Links */}
              </li>
              {/* Nav Item */}
              {/* Nav Item */}
              <li className="h-20">
                {/* Nav Links */}
                <LinkScroll
                  to="contact"
                  className="text-white mr-8 flex align-middle items-center p-0 h-full cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
                >
                  {" "}
                  Contacts{" "}
                </LinkScroll>
                {/* Nav Links */}
              </li>
              {/* Nav Item */}ƒ
            </ul>
            {/* Nav Menu */}
          </div>
          {/* Nav Container */}
        </div>
      </nav>
    </>
  );
};

export default Nav;
