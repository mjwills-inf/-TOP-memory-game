import React from 'react'

const cardDivStyle = {
  height: 'auto',
  width: 'fit-content',
  padding: '10px',
  margin: 'auto',
  boxShadow: '5px 10px',
  borderCcolor: "rgba(250, 250, 250, 0.2)",
  boxShadow: "5px 5px 12px rgb(0, 0, 0, 1), -5px -5px 12px rgba(50, 50, 50, 1)",
  borderRadius: "3px",
  alignContent: "centre"
}

const imgDivStyle = {
  height: '300px',
  border: '2px solid #E1AD01',
  borderRadius: '3px'
}

const titleDivStyle = {

}

export default function Cards(props) {
  console.log("a card is rendered")
  return (
    <div 
      className="card-div"
    >

      <div className="card-img">
        <img
          src={`${props.src}`}
          style={imgDivStyle}
        />
      </div>
      <div 
        className="card-title"
        style={titleDivStyle}
      >        
        {props.name}
      </div>
    </div>
  )
}
