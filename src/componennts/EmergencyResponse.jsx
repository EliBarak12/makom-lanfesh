import React from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const EmergencyResponse = () => {

    return (
        <div>
            <Header header={dataHebrew.getSupport.crisisButton}/>

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
                        <div className="flex flex-col mt-4 w-full">
                            <p className=" text-xl font-semibold">{dataHebrew.crisisResources.eranTitle}</p>
                            <div className="w-full flex justify-center mt-2">
                                <button className="w-1/2  py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">{dataHebrew.crisisResources.eranButton}</button>
                            </div>

                            <p className=" text-xl nt-2">{dataHebrew.crisisResources.suicideAndCrisisTitle}</p>
                            <div className="w-full flex justify-center mt-2">
                                <button className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">{dataHebrew.crisisResources.ntlButton}</button>
                            </div>

                            <div className="w-full flex justify-center mt-2">
                                <button className=" w-1/2 py-2 px-40 bg-blue-200 text-black  rounded-lg shadow-md hover:bg-blue-400">{dataHebrew.crisisResources.hamalLevEhadButton}</button>
                            </div>

                            <p className=" text-xl mt-2">{dataHebrew.crisisResources.emergencyCentersTitle}</p>
                            <div className="w-full flex justify-center mt-2">
                                <button className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">{dataHebrew.crisisResources.macabiButton}</button>
                            </div>

                            <div className="w-full flex justify-center mt-2">
                                <button className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">{dataHebrew.crisisResources.clalitButton}</button>
                            </div>

                            <div className="w-full flex justify-center mt-2">
                                <button className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">{dataHebrew.crisisResources.meuhedetButton}</button>
                            </div>

                            <div className="w-full flex justify-center mt-2">
                                <button className="w-1/2 py-2 px-4 bg-blue-200 text-black rounded-lg shadow-md hover:bg-blue-400">{dataHebrew.crisisResources.leumitButton}</button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EmergencyResponse;
