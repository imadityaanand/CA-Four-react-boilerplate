import React from 'react'
import "./Result.css"

export default function Result(props) {
  let score = props.score;

  let percentage = (score/5)*100;

  function PlayAgain() {
    window.location.reload();
  }

  return (
    <div className='result'>
      <h2>Results</h2>
      <div>
        <p className='percentage'>{percentage}%</p>
        <div>
          <p className='score'>{score} out of 5 correct</p>
          <div className='progress-bar'>
            <div style={{width: `${percentage}%`}}></div>
          </div>
        </div>
      </div>
      <div onClick={PlayAgain} className='play-again-btn'>Play Again</div>
    </div>
  )
}
