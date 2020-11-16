import React from 'react'

export default function Scores(props) {
  return (
    <div className="scores-div">
      <div className="score-num">
        Score:{props.score}
      </div>
      <div className="best-num">
        Best:{props.best}
      </div>
    </div>
  )
}
