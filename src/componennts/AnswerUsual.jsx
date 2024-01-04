import React from "react";
import { useState } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
const NAFSHI_SITE_URL = 'https://www.nafshi.info';
const OTEF_OREF_URL = 'https://www.otef-oref.co.il';
const FILL_FORM_URL = 'https://form.jotform.com/232812662439358';
const AnswerUsual = () => {
  return (
    <div>
      <Header header={dataHebrew.findProCare.header} />

      <main dir="rtl" className="flex-1 flex justify-center items-center">
        <div className="container mx-auto py-2 text-center">
          <section>
            <div className="flex justify-center w-full md:w-2/3 mx-auto mt-32 md:mt-12">
              <img
                src="/kfarLogo.png"
                alt="Your Image"
                className="w-1/2 rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col  mt-4 w-full justify-center items-center">
              <div className="flex flex-col mt-4 justify-center items-center ">
                <p className=" text-xl font-semibold w-1/2">
                  {dataHebrew.findProCare.portalsTitle}
                </p>
                <div className="w-full flex justify-center mt-2">
                  <a href={NAFSHI_SITE_URL} className="w-1/2  py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                    {dataHebrew.findProCare.nafshiButton}
                  </a>
                </div>

                <div className="w-full flex justify-center mt-2">
                  <a href={OTEF_OREF_URL} className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                    {dataHebrew.findProCare.otefOrefButton}
                  </a>
                </div>

                <p className=" text-xl mt-2 w-1/2 flex items-center">
                  {dataHebrew.findProCare.healthFundsTitle}
                </p>
               

                <div className="w-full flex justify-center mt-2">
                  <a href={FILL_FORM_URL} className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">
                    {dataHebrew.findProCare.fillFormButton}
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
export default AnswerUsual;
