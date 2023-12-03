import { Fragment } from "react";
import { useState, useEffect } from "react";
import NavBar from "../Navbar";
import { useNavigate } from "react-router";

const Addiction = () => {

  const Navigate = useNavigate();
  const questions = [
    {
      //1
      questionText:
        "Have you ever felt that you ought to cut down on your drinking or drug use?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //2
      questionText:
        "Have people annoyed you by criticizing your drinking or drug use?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //3
      questionText:
        "Have you ever felt bad or guilty about your drinking or drug use?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //4
      questionText: "Do you typically respond when faced with these triggers?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //5
      questionText:
        "Have you noticed any changes in your mental health due to addiction?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //6
      questionText:
        "Has addiction impacted your personal and professional life?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (marks) => {
    let oldScore = score;

    if (marks) {
      setScore(oldScore + marks);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  let symptoms = "no";

  if (score > 0 && score <= 6) {
    symptoms = "less";
  } else if (score >= 7 && score <= 12) {
    symptoms = "mild";
  } else if (score >= 13 && score <= 18) {
    symptoms = "moderately high";
  } else if (score === 18) {
    symptoms = "high";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <NavBar />

      <div className="bg-[#fcf8f4]">
        <div className="app">
          {showScore ? (
            <div className=" h-96 w-full flex flex-col justify-center items-center">
              <div className="h-80 w-[70rem] bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] flex flex-col justify-center items-center p-5 rounded-2xl text-2xl font-semibold text-white">
                You scored {score} out of 18. <br />
                You have {symptoms} symptoms of addiction.
                <div>
                  <button
                    onClick={() => Navigate("/TestPage")}
                    className="bg-[#ec744a] text-white rounded-xl font-semibold px-8 h-9 hover:bg-white hover:text-[#ec744a] hover:border-[#ec744a] hover:border-2 mt-6"
                  >
                    Take another test
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className=" h-[500px] w-full flex justify-center  items-center rounded-xl   ">
              <div className="h-80 w-[70rem] bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] flex flex-col justify-center items-start pl-40  gap-14 p-10 rounded-2xl">
                <h1 className=" text-white font-bold text-2xl">
                  1. Addiction Test.
                </h1>
                <div className=" ">
                  <div className="">
                    <span className="text-base">
                      Question {currentQuestion + 1}
                    </span>
                    /{questions.length}
                  </div>
                  <div className="text-2xl font-semibold ">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>
                <div className="flex  border-black  gap-5 text-white font-semibold">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.marks)
                        }
                        className="border-2 border-black rounded-xl p-2 bg-black hover:bg-white hover:text-black hover:font-semibold"
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Addiction;
