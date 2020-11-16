import React from 'react'
import Scores from '../Scores'


export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <Scores 
        score={props.score}
        best={props.best}
      />  
      <div className="instruction-div">
        Dont click the same picture twice
      </div>
    </div>
  )
}
