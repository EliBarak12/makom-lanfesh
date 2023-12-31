import React from "react";
import { useState } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import { useNavigate } from "react-router-dom";



const Support = () => {

  // const [SupportState,setSupportState] = useState(false)
  // const [quizState,setQuizState] = useState(false)
  // const [ansState,setAnsState] = useState(false)
  // const [enrtyState,setentryState] = useState(false)



  const navigateQuiz = useNavigate();



  const buttonStyle = {
    width: "100%",
    backgroundColor: "#CCCCCC", // Gray background color
    borderRadius: "8px", // Rounded corners
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px", // Adjust as needed
    margin: "14px", // Adjust as needed
    transition: "background-color 0.3s ease", // Smooth transition for hover effect
    ':hover': {
      backgroundColor: "#AAAAAA", // Change background color on hover
      cursor: "pointer", // Change cursor on hover
    },
  };

  const buttonTextStyle = {
    marginLeft: "18px",
    marginRight: "18px", // Spacing between icon and text
  };
  const hendelQuizClick = () => {

    navigateQuiz("/quiz");
  };
  const heandleAnswer =()=>{
    navigateQuiz("/emergency");

  }

  const heandleEmergency =()=>{
    navigateQuiz("/answer");
    
  }
  const heandleToolBox =()=>{
    navigateQuiz("/toolbox");
    
  }
  return (
    <div dir="rtl">
    <ul className="flex flex-col items-center justify-center  mt-4">
      <li className=" ">
        <button style={buttonStyle} onClick={heandleAnswer} className="focus:outline-none">
          <img
            src="/helpingHands.svg"
            alt="Compass Icon"
            className="w-10 h-10  focus:outline-none"
          />
          <span style={buttonTextStyle} className="text-xs">
            {dataHebrew.getSupport.crisisButton}
          </span>
        </button>

        <button style={buttonStyle} onClick={heandleEmergency} className="focus:outline-none hover:bg-gray-600">
          <img
            src="/medicalSupport.svg"
            alt="Compass Icon"
            className="w-10 h-10  focus:outline-none"
          />
          <span style={buttonTextStyle} className="text-xs">
            {" "}
            {dataHebrew.getSupport.findProCareButton}
          </span>
        </button>
        <button
          style={buttonStyle}
          className="focus:outline-none"
          onClick={hendelQuizClick}
        >
          <img
            src="/quiz.svg"
            alt="Compass Icon"
            className="w-10 h-10 focus:outline-none"
          />
          <span style={buttonTextStyle} className="text-xs">
            {" "}
            {dataHebrew.getSupport.answerAgainButton}
          </span>
        </button>
        <button style={buttonStyle} onClick={heandleToolBox} className="focus:outline-none">
          <img
            src="/compass.svg"
            alt="Compass Icon"
            className=" w-10 h-10 focus:outline-none"
          />
          <span style={buttonTextStyle} className="text-xs">
            {" "}
            {dataHebrew.getSupport.toolBox}
          </span>
        </button>
      </li>
    </ul>
  </div>
  );
};
export default Support;
