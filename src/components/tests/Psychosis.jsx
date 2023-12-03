import { Fragment } from "react";
import { useState, useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";
import NavBar2 from "../components/Navbar2";
import Card from "../components/Card";
// import "../style.css"
// import { Widgets } from "@mui/icons-material";

const Psychosis = () => {


    const questions = [
        {//1
            questionText: "Do familiar surroundings sometimes seem strange, confusing, threatening or unreal to you?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//2
            questionText: "Have you heard unusual sounds like banging, clicking, hissing, clapping or ringing in your ears?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//3
            questionText: "Do things that you see appear different from the way they usually do?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//4
            questionText: "Have you had experiences with telepathy, psychic forces, or fortune telling?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//5
            questionText: "Have you felt that you are not in control of your own ideas or thoughts?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//6
            questionText: "Do you have difficulty getting your point across, because you ramble or go off the track a lot when you talk?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//7
            questionText:
                "Do you have strong feelings or beliefs about being unusually gifted or talented in some way?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//8
            questionText:
                "Do you feel that other people are watching you or talking about you?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//9
            questionText: "Do you sometimes get strange feelings on or just beneath your skin, like bugs crawling?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//10
            questionText:
                "Do you sometimes feel suddenly distracted by distant sounds that you are not normally aware of?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        },
        {//11
            questionText:
                "Have you had the sense that some person or force is around you, although you couldn’t see anyone?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//12
            questionText:
                "Do you worry at times that something may be wrong with your mind?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//13
            questionText:
                "Have you ever felt that you don't exist, the world does not exist, or that you are dead?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//14
            questionText:
                "Have you been confused at times whether something you experienced was real or imaginary?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//15
            questionText:
                "Do you hold beliefs that other people would find unusual or bizarre?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//16
            questionText:
                "Do you feel that parts of your body have changed in some way, or that parts of your body are working differently?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//17
            questionText:
                "Are your thoughts sometimes so strong that you can almost hear them?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//18
            questionText:
                "Do you find yourself feeling mistrustful or suspicious of other people?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//19
            questionText:
                "Have you seen unusual things like flashes, flames, blinding light, or geometric figures?",
            answerOptions: [
                { answerText: "Not at all", marks: 0 },
                { answerText: "Few Times", marks: 1 },
                { answerText: "More than half the number of Times", marks: 2 },
                { answerText: "Almost every Time", marks: 3 },
            ],
        }, {//20
            questionText:
                "Do people sometimes find it hard to understand what you are saying?",
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

    if (score > 0 && score <= 15) {
        symptoms = "less";
    } else if (score >= 16 && score <= 30) {
        symptoms = "mild";
    } else if (score >= 31 && score <= 45) {
        symptoms = "moderately low";
    } else if (score >= 46 && score < 60) {
        symptoms = "moderately high";
    } else if (score === 60) {
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
                                You scored {score} out of 60. <br />
                                You have {symptoms} symptoms of Psychosis & Schizophrenia.
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

export default Psychosis;
