import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar";

const Bipolar = () => {
    const Navigate = useNavigate();
  const questions = [
    {
      questionText:
        "Has there ever been a period of time when you were not your usual self",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "You got much less sleep than usual and found you didn’t really miss it?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "You were so irritable that you shouted at people or started fights or arguments?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "Thoughts raced through your head or you couldn’t slow your mind down?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "You were so easily distracted by things around you that you had trouble concentrating or staying on track?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "Like being unable to work; having family, money or legal troubles; getting into arguments or fights?",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "Trouble concentrating on things, such as reading the newspaper or watching television",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "Have any of your blood relatives had manic-depressive illness or bipolar disorder?i.e. Children, siblings, parents, grandparents, aunts, and uncles.",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Few Times", marks: 1 },
        { answerText: "More than half the number of Times", marks: 2 },
        { answerText: "Almost every Time", marks: 3 },
      ],
    },
    {
      questionText:
        "How much of a problem did any of these cause you? Like being unable to work; having family, money or legal troubles; getting into arguments or fights?",
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

  if (score > 0 && score <= 9) {
    symptoms = "less";
  } else if (score >= 10 && score <= 18) {
    symptoms = "mild";
  } else if (score >= 19 && score <= 25) {
    symptoms = "moderate low";
  } else if (score >= 26 && score < 30) {
    symptoms = "moderately high";
  } else if (score === 30) {
    symptoms = "high";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
        <Navbar/>
      <div className="startTest">
        <div className="app">
          {showScore ? (
            <div className=" h-96 w-full flex justify-center items-center">
              <div className="h-80 w-[70rem] bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] flex flex-col justify-center items-center p-5 rounded-2xl text-2xl font-semibold text-white">
                You scored {score} out of 30, <br />
                You have {symptoms} symptoms of Bipolar disorder.
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
                  7. Bipolar a Test
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

export default Bipolar;
