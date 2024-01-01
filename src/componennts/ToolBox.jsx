import React from "react";
import { useState } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import { useNavigate } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
const ToolBox = () => {


      return (
        <div>
          <Header header={dataHebrew.toolbox.header} />
    
          <main dir="rtl" className="flex-1 flex justify-center items-center">
            <div className="container mx-auto py-2 text-center">
              <section>
                <div className="flex justify-center w-full md:w-2/3 mx-auto">
                  <img
                    src="/kfarLogo.png"
                    alt="Your Image"
                    className="w-1/2 rounded-lg shadow-md"
                  />
                </div>
                <div className="flex flex-col  mt-4 w-full justify-center items-center">
                  <div className="flex flex-col mt-4 justify-center items-center ">
                    <p className=" text-sm font-semibold w-1/2">
                      {dataHebrew.toolbox.toolsHelpTitle}
                    </p>
                    <p className=" text-xl font-semibold w-1/2">
                      {dataHebrew.toolbox.relaxMuscleTitle}
                    </p>
                    <p className=" text-sm font-semibold w-1/2">
                      {dataHebrew.toolbox.relaxMuscleText}
                    </p>
                    <div className="w-full flex justify-center mt-2">
                      <button className="w-1/2  py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                        {dataHebrew.toolbox.relaxMuscleButton}
                      </button>
                    </div>
                    <p className=" text-xl font-semibold w-1/2">
                      {dataHebrew.toolbox.relaxBodyTitle}
                    </p>
                    <p className=" text-sm font-semibold w-1/2">
                      {dataHebrew.toolbox.relaxBodyText}
                    </p>
    
                    <div className="w-full flex justify-center mt-2">
                      <button className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                        {dataHebrew.toolbox.relaxBodyButton}
                      </button>
                    </div>
    
                    <p className=" text-xl mt-2 w-1/2 flex items-center">
                      {dataHebrew.toolbox.botTitle}
                    </p>
                    <p className=" text-sm mt-2 w-1/2 flex items-center">
                      {dataHebrew.toolbox.botText}
                    </p>
                    <div className="w-full flex justify-center mt-2">
                      <button className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                        {dataHebrew.toolbox.botButton}
                      </button>
                    </div>
    
                    
                  </div>
                </div>
              </section>
            </div>
          </main>
          <Footer />
        </div>
      );

    

};
export default ToolBox;
