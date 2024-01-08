import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import { useQuery } from "react-query";
import axios from "axios";

const answersObj = {
  0: "כלל לא",
  1: "במידה מועטה",
  2: "באופן בינוני",
  3: "במידה רבה",
  4: "באופן קיצוני",
};

const fetchData = async () => {
  try {
    const response = await axios.get("https://makom-lanfesh-server.vercel.app/data");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};

const DataVisualization = () => {
  const { data, isLoading, isError } = useQuery("data", fetchData);
  const [userCount, setUserCount] = useState(0);
  const [questionnaireData, setQuestionnaireData] = useState([]);
  const [linkData, setLinkData] = useState({});
  const chartRefs = useRef([]);

  useEffect(() => {
    if (data) {
      setUserCount(data.data.length);
      setQuestionnaireData(data.quiz);


      const linksHebrow = {"Relax Muscle":"הרפיית שרירים מתקדמת","CHAT BOT":"סולי","Relax Body":"סקירת גוף"}
      const links = {};
      data.links.forEach((link) => {
        links[linksHebrow[link.name]] = link.clickCount;
      });

      const linkCanvas = document.getElementById("linkChart");
      const linkChart = new Chart(linkCanvas, {
        type: "pie",
        data: {
          labels: Object.keys(links),
          datasets: [
            {
              label: "Clicked Links",
              data: Object.values(links),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
              ],
              borderWidth: 1,
            },
          ],
        },
      });

      chartRefs.current.push(linkChart);
    }
  }, [data]);

  const countVotesPerQuestion = () => {
    const voteCounts = {};

    // Iterate through each question in the quiz data
    questionnaireData.forEach((quizData) => {
      // Iterate through the answers of each question
      Object.keys(quizData.quizAns).forEach((question) => {
        const answer = quizData.quizAns[question];

        // If the question exists in voteCounts, increment the count for the answer
        if (!voteCounts[question]) {
          voteCounts[question] = {};
        }
        if (!voteCounts[question][answer]) {
          voteCounts[question][answer] = 1;
        } else {
          voteCounts[question][answer] += 1;
        }
      });
    });

    return voteCounts;
  };

  const votesPerQuestion = countVotesPerQuestion();

  const renderVoteCounts = () => {
    return (
      <div dir="rtl" className="bg-white shadow-md rounded-md p-4 mt-8">
        <h2 className="text-lg mb-4">מספר עונים פר שאלה</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(votesPerQuestion).map((question, index) => (
            <div key={index}>
              <h3 className="text-lg">שאלה מספר {question}</h3>
              <ul>
                {Object.keys(votesPerQuestion[question]).map((answer, i) => (
                  <li key={i}>
                    {answersObj[answer]} - {answer}:{" "}
                    {votesPerQuestion[question][answer]} עונים
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap">
    <div className="w-full md:w-3/4 p-4">
      <div className="mt-4">{renderVoteCounts()}</div>
    </div>
    <div className="w-full md:w-1/4 p-4">
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg mb-4">Clicked Links</h2>
        <canvas id="linkChart" width="10" height="10"></canvas>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 mt-8">
        <h2 className="text-2xl mb-4">מספר משתמשים באתר: {userCount}</h2>
      </div>
      <div className="bg-white shadow-md rounded-md p-4 mt-8">
        <h2 className="text-2xl mb-4"> ציוני המשתמשים</h2>
        {questionnaireData.map((quiz, index) => (
          <p key={index}>{quiz.quizFinish}</p>
        ))}
      </div>
    </div>
  </div>
  );
};

export default DataVisualization;
