import React from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Support from "./Support.jsx";
const Header = ({ header }) => {
  const [openNav, setOpenNav] = useState(false);

  const hendelOpenNav = () => {
    setOpenNav(!openNav);
  };
  const headerFooterStyle = {
    backgroundColor: "#015C7C",
  };
  return (
    <header className="flex items-center fixed h-28 top-0 w-full z-10  md:sticky md:top-0">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 390 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H390V159L342.134 146.849C245.576 122.338 144.424 122.338 47.8665 146.849L0 159V0Z"
          fill="#015C7C"
        />
        <path
          d="M0 145.09L45.9742 133.045C143.676 107.447 246.324 107.447 344.026 133.045L390 145.09V159.5L336.837 146.141C243.726 122.744 146.274 122.744 53.1633 146.141L0 159.5V145.09Z"
          fill="#B6DFF2"
        />
      </svg>

      <div className="container mx-auto relative z-10 flex flex-col justify-center mb-2 items-center h-full">
        <h1 className="text-2xl font-bold text-center">{header}</h1>

        <div className=" absolute top-0 left-1 z-50  bg-blue-200  rounded-lg shadow-md mt-4">
          <div
            className=" rounded-lg shadow-md p-6  cursor-pointer w-50 transition-all duration-300 ease-in-out hover:shadow-lg flex"
            onClick={hendelOpenNav}
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              color="black"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
            </svg>
            <div className=" ">
            {openNav && <Support />}
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
