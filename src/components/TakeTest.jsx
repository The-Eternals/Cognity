import React, { useState } from 'react'
import {Depression} from './tests/Depression'
const TakeTest = () => {
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
        symptoms = "high";
      } else if (score <= 18) {
        symptoms = "mild";
      } else if (score <= 27) {
        symptoms = "moderate high";
      } else if (score <= 36) {
        symptoms = "moderately low";
      }else if(score <= 48){
        symptoms = "no";
      }
    


  return (
    <div>
      <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of 48 <br/>
		  You have {symptoms} symptoms of
          depression
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.marks)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  )
}

export default TakeTest
