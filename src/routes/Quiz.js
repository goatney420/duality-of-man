import "../App.css"
import React, { useState } from 'react';
import {qBank} from "../QuestionBank";
import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Tooltip } from 'react95';
import { Hourglass } from 'react95';
import { Button } from 'react95';

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
                    <img src="https://win98icons.alexmeub.com/images/close-icon.png"/>
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
                            <p>{result.score >= 4 ? 'Puka Shell' : 'Cross Necklace'}</p>

                            <div className="footer">
                              <a href="https://www.tiktok.com/@bncmap/video/7271367686259526955">Inspo</a>
                            </div>
                            
                        </div>
                    )}
                </div>
            </center>
            
        </div>
      )
  }
  
  export default Quiz