import React, { useState } from 'react'
import OptionBox from './OptionBox'
import "./QuestionBox.css"
import questions from '../questions'
import Result from './Result';

export default function QuestionBox() {
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0)

  let quesColor = document.querySelector("h2");

  function HandleClick(e) {
    setQues(ques + 1);
    console.log(e.target.id);
    let ans = questions[ques].options[e.target.id].isCorrect;
    if(ans) setScore(score + 1);
  }

  return (
    ques === 5 ? <Result score={score} /> :
    <>
      <div className='ques-num-div'>
        <div className='ques-num'>{ques + 1}</div>
        <p>out of 5</p>
      </div>
      <h2>{questions[ques].text}</h2>
      <div className='options-container'>
        <OptionBox id={0} click={HandleClick} text={questions[ques].options[0].text} />
        <OptionBox id={1} click={HandleClick} text={questions[ques].options[1].text} />
        <OptionBox id={2} click={HandleClick} text={questions[ques].options[2].text} />
        <OptionBox id={3} click={HandleClick} text={questions[ques].options[3].text} />
      </div>
      <div className='footer-btn-container'>
        <div className='highlight-btn' onClick={() => document.querySelector("h2").style.color = "red"}>Highlight</div>
        <div className='highlight-btn' onClick={() => document.querySelector("h2").style.color = quesColor}>Remove Highlight</div>
      </div>
    </>
  )
}
