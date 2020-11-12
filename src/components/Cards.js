import React from 'react'

export default function Cards(props) {
  return (
    <div className="card-div">

      <div className="card-img">
        <img className="image" src={`${props.src}`}/>
      </div>
      
      <div className="card-title">        
        {props.name}
      </div>
    
    </div>
  )
}
