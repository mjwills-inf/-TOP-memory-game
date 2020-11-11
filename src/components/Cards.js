import React from 'react'

export default function Cards(props) {
  console.log("a card is rendered")
  return (
    <div className="card-div">
      A CARD
      <img
        src={`${props.src}`}
      />
    </div>
  )
}
