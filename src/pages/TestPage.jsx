import { Fragment } from "react";
import { useState, useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import NavBar2 from "../components/Navbar2";
import Card from "../components/Card";
// import "../style.css"
// import { Widgets } from "@mui/icons-material";

const TestPage = () => {


  const questions = [
    {
      questionText: "Little interest or pleasure in doing things",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Feeling down, depressed, or hopeless",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Trouble falling or staying asleep, or sleeping too much",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Feeling tired or having little energy ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Poor appetite or overeating ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText:
        "Feeling bad about yourself — or that you are a failure or have let yourself down or your family down ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText:
        "Trouble concentrating on things, such as reading the newspaper or watching television",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText:
        "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText:
        "Thoughts that you would be better off dead or of hurting yourself in some way ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Feeling nervous, anxious or on edge",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Not being able to stop or control worrying ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Worrying too much about different things ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Trouble relaxing ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Being so restless that it is hard to sit still ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Becoming easily annoyed or irritable ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
      ],
    },
    {
      questionText: "Feeling afraid as if something awful might happen ",
      answerOptions: [
        { answerText: "Not at all", marks: 0 },
        { answerText: "Several days", marks: 1 },
        { answerText: "More than half the number of days", marks: 2 },
        { answerText: "Almost every day", marks: 3 },
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

  if (score <= 9) {
    symptoms = "No";
  } else if (score <= 18 && score>=9) {
    symptoms = "mild";
  } else if (score <= 27 && score>=18) {
    symptoms = "moderate";
  } else if (score <= 36 && score>=27) {
    symptoms = "moderately high";
  }else if(score <= 48 && score>=36){
	symptoms = "High";
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <NavBar2 title = "Test"/>
      
      <div className="startTest">
      <div className="app" >
      {showScore ? (
        <div className=" h-96 w-full flex justify-center items-center">
        <div className="h-80 w-[70rem] bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] flex justify-center items-center p-5 rounded-2xl text-2xl font-semibold text-white">
          You scored {score} out of 48, <br/>
		  You have {symptoms} symptoms of
          depression
        </div>
        </div>
      ) : (
        <div className=" h-[500px] w-full flex justify-center  items-center rounded-xl   ">
          <div className="h-96 w-[70rem] bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] flex flex-col justify-center items-start pl-40  gap-14 p-10 rounded-2xl">
          <h1 className=" text-white font-bold text-2xl border-2 border-white rounded-xl bg-[#ec744a] cursor-pointer px-10 py-2">Take a Test</h1>
          <div className=" ">
            
            <div className="">
              <span className="text-base">Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="text-2xl font-semibold ">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="flex  border-black  gap-5 text-white font-semibold">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.marks)}
                className="border-2 border-black rounded-xl p-2 bg-black hover:bg-white hover:text-black hover:font-semibold"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
      </div>
      <Card/>
      <NewsLetter />
      <Testimonials />
    </Fragment>
  );
};

export default TestPage;
