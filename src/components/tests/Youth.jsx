import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import NavBar from "../Navbar";

const Youth = () => {
  const Navigate = useNavigate();
  const questions = [
    {
      //1
      questionText: "Complain of aches or pains",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //2
      questionText: "Spend more time alone",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //3
      questionText: "Tire easily, little energy",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //4
      questionText: "Fidgety, unable to sit still",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //5
      questionText: "Have trouble with teacher",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //6
      questionText: "Less interested in school",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //7
      questionText: "Act as if driven by motor",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //8
      questionText: "Distracted easily",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //9
      questionText: "Has trouble concentrating",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //10
      questionText: "Acts as if driven by a motor",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //11
      questionText: "Fights with other children",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //12
      questionText: "Does not listen to rules",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //13
      questionText: "Does not understand other people’s feelings",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //14
      questionText: "Blames others for his/her troubles",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //15
      questionText: "Refuses to share",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      //16
      questionText: "Takes things that do not belong to him/her",
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

  if (score > 0 && score <= 12) {
    symptoms = "less";
  } else if (score >= 13 && score <= 25) {
    symptoms = "mild";
  } else if (score >= 26 && score <= 38) {
    symptoms = "moderate low";
  } else if (score >= 39 && score < 48) {
    symptoms = "moderately high";
  } else if (score === 48) {
    symptoms = "high";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <NavBar/>
      <div className="startTest">
        <div className="app">
          {showScore ? (
            <div className=" h-96 w-full flex justify-center items-center">
              <div className="h-80 w-[70rem] bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] flex flex-col justify-center items-center p-5 rounded-2xl text-2xl font-semibold text-white">
                You scored {score} out of 48. <br />
                You have {symptoms} symptoms or issues related to mental health.
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
                  5. Youth Test.
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

export default Youth;
