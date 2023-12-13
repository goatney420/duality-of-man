import "../App.css"
import React, { useState } from 'react';
import {qBank} from "../QuestionBank";
import { Link } from "react-router-dom"; 

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })

    // const { questions } = qBank
    const { question, choices, correctAnswer } = qBank[activeQuestion] 


    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) =>
          selectedAnswer
            ? {
                ...prev,
                score: prev.score + 1,
                correctAnswers: prev.correctAnswers + 1,
              }
            : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== qBank.length - 1) {
          setActiveQuestion((prev) => prev + 1)
        } else {
          setActiveQuestion(0)
          setShowResult(true)
        }
      }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
          setSelectedAnswer(true)
        } else {
          setSelectedAnswer(false)
        }
      }
    
      return (
        <div className="window-container">

          <div className="windows-header">
                <span className="windows-header-text">The Duality of Man</span>
                <button class="header-button">
                    <img src="https://win98icons.alexmeub.com/images/close-icon.png" alt="x"/>
                </button>
          </div>

            <center>
                <div className="content">
                    {!showResult ? (
                        <div>
                            <h2>{question}</h2>
                            <ul>
                                {choices.map((answer, index) => (
                            <li
                                onClick={() => onAnswerSelected(answer, index)}
                                key={answer}
                                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                                {answer}
                            </li>
                            ))}
                            </ul>
                                <div className="flex-right">
                                <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                                {activeQuestion === qBank.length - 1 ? 'Finish' : 'Next'}
                                </button>
                            </div>
                        </div>
                        ): (
                        <div>
                            <h2>Result</h2>
                            {/* Syds logic here: 
                            pure puka is score 7-9
                            puka trying to be cross 5-6
                            cross trying to be puka 3-4
                            pure cross 0-2 */}
                            <p>
                            {result.score >= 7
                              ? 'Puka Shell'
                              : result.score >= 5 && result.score <= 6
                              ? 'Puka Trying to be Cross'
                              : result.score >= 3 && result.score <= 4
                              ? 'Cross Trying to be Puka'
                              : result.score <= 2
                              ? 'Cross Necklace'
                              : 'Default Value'}
                            </p>
                            <div className="footer">
                              <div className="link-container">
                                <Link className="link-tag" to="/StartQuiz">Take Again</Link>
                              </div>
                            </div>
                        </div>
                    )}
                </div>
            </center>
            
        </div>
      )
  }
  
  export default Quiz