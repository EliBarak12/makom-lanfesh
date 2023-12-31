import React from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import Support from "./Support.jsx";
const HomePage = () => {
  const headerFooterStyle = {
    backgroundColor: "#015C7C",
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="relative  text-white py-8">
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

        <div className="container mx-auto relative z-10 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{dataHebrew.getSupport.header}</h1>
        </div>
      </header>

      <main className="flex-1 flex justify-center items-center">
        <div className="container mx-auto py-2 text-center">
          <section>
            {/* ... */}
            <div className="flex justify-center w-full md:w-2/3 mx-auto">
              {/* Replace 'your-image.jpg' with the path to your image */}
              <img
                src="/kfarLogo.png"
                alt="Your Image"
                className="w-1/3 rounded-lg shadow-md"
              />
            </div>
            <Support />
          </section>
        </div>
      </main>

      <footer style={headerFooterStyle}>
        <div className="container mx-auto text-center">
          {/* Add footer content or links */}
          <p>
            &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
