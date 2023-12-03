import { Fragment } from "react";
import { useState, useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import NavBar2 from "../components/Navbar2";
import Card from "../components/Card";
// import "../style.css"
// import { Widgets } from "@mui/icons-material";

const Anxiety = () => {


    const questions = [
        {
            questionText: "Feeling nervous, anxious, or on edge",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Several days", marks: 1 },
                { answerText: "More than half the number of days", marks: 2 },
                { answerText: "Almost every day", marks: 3 },
            ],
        },
        {
            questionText: "Not being able to stop or control worrying",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Several days", marks: 1 },
                { answerText: "More than half the number of days", marks: 2 },
                { answerText: "Almost every day", marks: 3 },
            ],
        },
        {
            questionText: "Worrying too much about different things",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Several days", marks: 1 },
                { answerText: "More than half the number of days", marks: 2 },
                { answerText: "Almost every day", marks: 3 },
            ],
        },
        {
            questionText: "Trouble relaxing",
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
            questionText:
                "Feeling afraid, as if something awful might happen",
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

    if (score > 0 && score <= 5) {
        symptoms = "less";
    } else if (score >= 6 && score <= 10) {
        symptoms = "mild";
    } else if (score >= 11 && score <= 15) {
        symptoms = "moderate low";
    } else if (score >= 16 && score < 21) {
        symptoms = "moderately high";
    } else if (score === 21) {
        symptoms = 'high'
    }



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <NavBar2 title="Test" />

            <div className="startTest">
                <div className="app" >
                    {showScore ? (
                        <div className=" h-96 w-full flex justify-center items-center">
                            <div className="h-80 w-[70rem] bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] flex justify-center items-center p-5 rounded-2xl text-2xl font-semibold text-white">
                                You scored {score} out of 21. <br />
                                You have {symptoms} symptoms of Anxiety.
                            </div>
                        </div>
                    ) : (
                        <div className=" h-[500px] w-full flex justify-center  items-center rounded-xl   ">
                            <div className="h-80 w-[70rem] bg-gradient-to-r from-[#5fb47d] to bg-[#017d6e] flex flex-col justify-center items-start pl-40  gap-14 p-10 rounded-2xl">
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
            <Card />
            <NewsLetter />
            <Testimonials />
        </Fragment>
    );
};

export default Anxiety;
