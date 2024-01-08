import React from "react";
import { useState } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";

import { useMutation } from 'react-query';
import axios from 'axios';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


const RELAX_MUSCLE_SITE_URL = 'https://www.youtube.com/watch?v=z2ZY1VEveU4';
const RELAX_BODY_SITE_URL = 'https://www.youtube.com/watch?v=vv2BourVYUM';
const CHAT_BOT_HEBREW_SITE_URL = 'https://wa.link/oh70id';
const CHAT_BOT_ENGLISH_SITE_URL = 'https://t.me/friend_first_aid_bot';

const ToolBox = () => {



  const sendLinkNameToServer = useMutation(async (linkName) => {
   
    await axios.post('https://makom-lanfesh-server.vercel.app/links', { linkName :linkName});
  });

  const handleLinkClick = async (linkName) => {
    try {
      await sendLinkNameToServer.mutateAsync(linkName);

    } catch (error) {
      console.error("Error occurred:", error);

    }
  };

      return (
        <div>
          <Header header={dataHebrew.toolbox.header} />
    
          <main dir="rtl" className="flex-1 flex justify-center items-center">
            <div className="container mx-auto py-2 text-center">
              <section>
                <div className="flex justify-center w-full md:w-2/3 mx-auto mt-36 md:mt-12">
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
                      <a  onClick={() => handleLinkClick('Relax Muscle')} href={RELAX_MUSCLE_SITE_URL} className="w-1/2  py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                        {dataHebrew.toolbox.relaxMuscleButton}
                      </a>
                    </div>
                    <p className=" text-xl font-semibold w-1/2">
                      {dataHebrew.toolbox.relaxBodyTitle}
                    </p>
                    <p className=" text-sm font-semibold w-1/2">
                      {dataHebrew.toolbox.relaxBodyText}
                    </p>
    
                    <div className="w-full flex justify-center mt-2">
                      <a  onClick={() => handleLinkClick('Relax Body')} href={RELAX_BODY_SITE_URL} className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                        {dataHebrew.toolbox.relaxBodyButton}
                      </a>
                    </div>
    
                    <p className=" text-xl mt-2 w-1/2 flex items-center">
                      {dataHebrew.toolbox.botTitle}
                    </p>
                    <p className=" text-sm mt-2 w-1/2 flex items-center">
                      {dataHebrew.toolbox.botText}
                    </p>
                    <div className="w-full flex justify-center mt-2">
                      <a  onClick={() => handleLinkClick('CHAT BOT')} href={CHAT_BOT_HEBREW_SITE_URL} className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                        {dataHebrew.toolbox.botButton}
                      </a>
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
