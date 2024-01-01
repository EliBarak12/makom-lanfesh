import React, { useState, useEffect } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";

const Results = ({ sum }) => {
  const [color, setColor] = useState("");
  const [text, setText] = useState("");
  const halfImagePosition = `${ -40 +(sum)}%`;
  useEffect(() => {
    // Update text and color based on the value of 'sum'
    if (sum < 30) {
      setText(dataHebrew.results.lowScore);
      setColor("#79B9A4");
    } else if (sum >= 30 && sum < 60) {
      setText(dataHebrew.results.mediumScore);
      setColor("#F4AF46");
    } else if (sum >= 60) {
      setText(dataHebrew.results.highScore);
      setColor("#EA7565");
    }
    

  
  }, [sum]); 


  const boxStyles = {
    width: "5rem",
    height: "2.5rem",
    textAlign: "center",
    borderRadius: "0.5rem",
    color: "white",
    fontSize: "25px",
    backgroundColor: color, // Set background color based on the 'color' state
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="mt-4">{dataHebrew.results.totalScore}</h3>
      {/* Apply inline style for dynamic background color */}
      
      <div className="m-4 " style={boxStyles}>
        {sum}
      </div>
      
      <img
        src="/healthMeter.svg"
        alt="Compass Icon"
        className="w-2/5 h-50 mt-4 focus:outline-none"
      />
            <img className="" style={{ marginLeft: halfImagePosition}} src="/polygon.svg" alt="" />      <div className="flex flex-row w-2/5 justify-between items-center text-xs md:text-sm">

      {/* Scale indicators */}
        <div>80</div>
        <div>70</div>
        <div>60</div>
        <div>50</div>
        <div>40</div>
        <div>30</div>
        <div>20</div>
        <div>10</div>
        <div>0</div>
      </div>
      {/* Text displaying the result */}
      <div className="w-3/5 text-inherit mt-6 ">{text}</div>
    </div>
  );
};

export default Results;
