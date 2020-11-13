import React, { useState } from 'react'

export default function Cards(props) {
  
  return (
    <div className="card-div" onClick={props.setClicked}>
      <div className="card-img">
        <img 
          className="image" 
          src={`${props.src}`} 
          alt={props.name}
        />
      </div>
      <div className="card-title">        
        {props.name}
      </div>
   </div>
  )
}
