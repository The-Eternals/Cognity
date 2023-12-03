import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import NavBar from "../Navbar";

const Ptsd = () => {
    const Navigate = useNavigate();
  const questions = [
    {
      questionText:
        "Had nightmares about the event(s) or thought about the event(s) when you did not want to?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText: "Been constantly on guard, watchful, or easily startled?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "Felt numb or detached from people, activities, or your surroundings?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
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

  if (score > 0 && score <= 5) {
    symptoms = "less";
  } else if (score >= 6 && score <= 10) {
    symptoms = "moderate low";
  } else if (score >= 11 && score < 15) {
    symptoms = "moderately high";
  } else if (score === 15) {
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
                You scored {score} out of 15. <br />
                You have {symptoms} symptoms of PTSD.
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
                  8. PTSD Test.
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

export default Ptsd;
