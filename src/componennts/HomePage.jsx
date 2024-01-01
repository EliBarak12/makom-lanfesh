import React from "react";
import {useEffect } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import Support from "./Support.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {  useNavigate } from "react-router-dom";
const HomePage = () => {

    const navigate = useNavigate()

useEffect(()=>{
    const entry = localStorage.getItem("entry")

    if (!entry){
        navigate("/entry")

    }

},[])
    

  return (
    <div  className="flex flex-col min-h-screen">
    
<Header header={dataHebrew.getSupport.header}/>
      <main dir="rtl" className="flex-1 flex justify-center items-center">
        <div className="container mx-auto py-2 text-center">
          <section>
            {/* ... */}
            <div className="fixed flex top-24 right-56 justify-center w-full md:w-2/3 mx-auto">
              {/* Replace 'your-image.jpg' with the path to your image */}
              <img
                src="/kfarLogo.png"
                alt="Your Image"
                className="w-1/2 rounded-lg shadow-md"
              />
            </div>
            <div className="mt-40">
            <Support />
            </div >
          </section>
        </div>
      </main>
<Footer/>
     
    </div>
  );
};

export default HomePage;
