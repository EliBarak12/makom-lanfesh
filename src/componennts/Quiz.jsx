import React, { useState } from "react";
import { dataHebrew } from "../text/Hebrew.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Results from "./Results.jsx";
const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState(false);
  const [sum, setSum] = useState(0);

  const handleSelection = (questionNumber, answerValue) => {
    setSum(sum + Number(answerValue));
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
        <div key={currentQuestionKey} className="mt-4 text-lg w-full md:w-1/2">
            <div className=" min-h-24">
          <p>{dataHebrew.questionnaire.question[currentQuestionKey]}</p>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-8 ">
            <div className="flex flex-col justify-center items-center">
              {Object.keys(dataHebrew.questionnaire.selections).map(
                (selectionNumber) => (
                  <div key={selectionNumber} className="  w-2/3 h-10 mb-4 mr-4">
                    <button
                      onClick={() =>
                        handleSelection(currentQuestionKey, selectionNumber)
                      }
                      className="w-full h-full bg-gray-200 hover:bg-gray-300 text-black font-bold rounded-full"
                    >
                      {dataHebrew.questionnaire.selections[selectionNumber]}
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      );
    } else {
      setResults(true);
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
      <Header header={dataHebrew.questionnaire.header} />
      <main dir="rtl" className="flex-1 flex justify-center items-center">
        <div className="container mx-auto py-2 text-center">
          <section>
            {/* ... */}
            <div className="flex justify-center  w-full md:w-2/3 mx-auto mt-36 md:mt-12">
              {/* Replace 'your-image.jpg' with the path to your image */}
              <img
                src="/kfarLogo.png"
                alt="Your Image"
                className="w-1/2 rounded-lg shadow-md"
              />
            </div>
            {results && <Results sum={sum} />}
            {!results && (
              <div className="min-h-56">
                {" "}
                <div className="flex flex-col  justify-center items-center ">
                  <p className="mb-4 mt-4 ">
                    {dataHebrew.questionnaire.questionText}{" "}
                    {currentQuestion + 1} {dataHebrew.questionnaire.ofText}{" "}
                    {Object.keys(dataHebrew.questionnaire.question).length}
                  </p>
                  <p className="mt-4">{dataHebrew.questionnaire.prefix}</p>
                </div>
                {/* Render Questions */}
                <div className="flex justify-center items-center ">
                  {renderQuestions()}
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

export default Quiz;
