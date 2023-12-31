import React, { useState } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const[results,setResults] = useState(false)
  const[sum,setSum ] = useState(0)


  const headerFooterStyle = {
    backgroundColor: "#015C7C",
  };

  const handleSelection = (questionNumber, answerValue) => {
    setSum(sum + Number(answerValue))
    setAnswers({
      ...answers,
      [questionNumber]: answerValue,
    });
    // Move to the next question after selecting the answer
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuestions = () => {
    const questionKeys = Object.keys(dataHebrew.questionnaire.question);
    const currentQuestionKey = questionKeys[currentQuestion];

    if (currentQuestion < questionKeys.length) {
        return (
            <div key={currentQuestionKey} className="mt-4 text-lg w-full md:w-1/3">
            <p>
              {dataHebrew.questionnaire.question[currentQuestionKey]}
            </p>
            <div className="grid grid-cols-1 gap-2 mt-8 ">
              <div className="flex flex-col">
                {Object.keys(dataHebrew.questionnaire.selections).map((selectionNumber) => (
                  <div key={selectionNumber} className="w-120 h-10 mb-4 mr-4">
                    <button
                      onClick={() =>
                        handleSelection(currentQuestionKey, selectionNumber)
                      }
                      className="w-full h-full bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-full"
                    >
                      {dataHebrew.questionnaire.selections[selectionNumber]}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          );
    } else {
        setResults(true)
      return (
        <div>
          <p>All questions answered.</p>
          <pre>{JSON.stringify(answers, null, 2)}</pre>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-full">
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
        <h1 className="text-2xl font-bold">{dataHebrew.questionnaire.header}</h1>
       
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
          {results && <div className="flex flex-col justify-center items-center">
            <h3 className="mt-4">{dataHebrew.results.totalScore}</h3>
            <div className="w-20 h-14  rounded text-center">{sum}</div>
            <img
            src="/healthMeter.svg"
            alt="Compass Icon"
            className=" w-100 h-50 mt-4 focus:outline-none"
          /></div>}
          { !results && <div> <div className="flex flex-col justify-center items-center ">
       <p className="mb-4 mt-4">
          {dataHebrew.questionnaire.questionText} {currentQuestion + 1}{" "}
          {dataHebrew.questionnaire.ofText}{" "}
          {Object.keys(dataHebrew.questionnaire.question).length}
        </p>
        <p className="mt-4">{dataHebrew.questionnaire.prefix}</p>
      </div>

      {/* Render Questions */}
      <div className="flex justify-center items-center">
        {renderQuestions()}
        </div> 
      </div>}

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

export default Quiz;
