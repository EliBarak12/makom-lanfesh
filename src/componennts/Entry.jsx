import React from "react";
import { useState, useEffect } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import Support from "./Support.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import axios from "axios";
const Entry = () => {
  const [accept, setAccept] = useState(true);
  const [entry, setEntry] = useState(false);

  const navigateQuiz = useNavigate();

  const heandlEntry = () => {
    localStorage.setItem("entry", true);

    navigateQuiz("/quiz");
  };

  useEffect(() => {
    const sendUserEntry = async () => {
      try {
        const response = await axios.post("https://makom-lanfesh-server.vercel.app/userEntry");
        console.log("Request sent successfully");
      } catch (error) {
        console.error("Error sending request:", error);
      }
    };

    sendUserEntry();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative text-white py-8">
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
          <h1 className="text-2xl font-bold text-center">
            {dataHebrew.userAgreement.pageTitle}
          </h1>

          <div className=" absolute top-0 left-1 z-50"></div>
        </div>
      </header>

      <main dir="rtl" className="flex-1 flex  justify-center items-center">
        <div className="container flex justify-center items-center mx-auto py-2 text-center">
          <section className="flex flex-col  justify-center items-center ">
            {/* ... */}
            <div className="flex flex-col  justify-center items-center  ">
              {/* Replace 'your-image.jpg' with the path to your image */}
              <img
                src="/kfarLogo.png"
                alt="Your Image"
                className=" w-1/2 rounded-lg shadow-md"
              />
            </div>
            {accept && (
              <div>
                <div>
                  <h3 className="text-black text-xl mt-4">
                    {dataHebrew.userAgreement.header}
                  </h3>
                </div>
                <div>
                  <h1 className="text-black text-2xl mt-4">
                    {dataHebrew.userAgreement.appName}
                  </h1>
                </div>
                <div className=" max-w-full md:max-w-lg">
                  <p className="  mt-2">{dataHebrew.userAgreement.text}</p>
                </div>
                <div className="w-full flex justify-center mt-2">
                  <button
                    onClick={() => {
                      setAccept(false), setEntry(true);
                    }}
                    className=" fixed bottom-2 w-1/2 py-2 px-4 bg-blue-300 text-black rounded-lg shadow-md hover:bg-blue-500"
                  >
                    {dataHebrew.userAgreement.acceptButton}
                  </button>
                </div>
              </div>
            )}
            {entry && (
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-black text-xl mt-4">
                  {dataHebrew.tutorial[1].header}
                </h3>

                <div>
                  <p className="text-black text-lg mt-4">
                    {dataHebrew.tutorial[1].text}
                  </p>
                </div>
                <div className="py-6">
                  <img src="/door.svg" alt="" />
                </div>
                <h3 className="text-black text-xl mt-4">
                  {dataHebrew.tutorial[2].header}
                </h3>
                <div className=" max-w-full md:max-w-lg">
                  <p className="  mt-2">{dataHebrew.tutorial[2].text}</p>
                </div>
                <div className="mb-16 py-6">
                  <img src="/safety.svg" alt="" />
                </div>
                <div className="w-full flex justify-center mt-2">
                  <button
                    onClick={heandlEntry}
                    className=" fixed bottom-6 w-1/2 py-2 px-4 bg-blue-300 text-black rounded-lg shadow-md hover:bg-blue-500"
                  >
                    {dataHebrew.tutorial.continue}
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Entry;
