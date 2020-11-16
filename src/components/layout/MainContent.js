import React, { useState } from 'react'

import Cards from '../Cards';

import  { pictures } from '../data/data'
let pictureData = pictures.map((item) => {
  item.clicked = false
  return item
})

export default function MainContent(props) {

  const [pictureState, setPictureState] = useState(pictureData)

  const endTurn = () => {
    console.log("endTurn")
    props.resetScores()
    let arrayCopy = pictureState.map((item) => item)
    arrayCopy.map((item) => item.clicked = false)
    setPictureState(arrayCopy)
  }
  
  const shuffleArray = (array) => {
    for (let i = array.length-1; i>0; i--) {
      let j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }
  
  const checkClicked = (array, id) => {
    let targetPicture = array.find(item => item.id === Number(id))
    if (targetPicture.clicked === true) {
      return true
    } else {
      targetPicture.clicked = true
      return false
    }
  }

  const handleClick = (e) => {
    let arrayCopy = pictureState.map((item) => item)
    if (checkClicked(arrayCopy, e.target.getAttribute("data-id"))) {
      endTurn()
    } else {
      (console.log("running else"))
      props.plusScore()    
      shuffleArray(arrayCopy)    
      setPictureState(arrayCopy)
    }
  }

  return (

  <div className="main-content">
    <div className="grid-container">
      {pictureState.map((item) =>
          <Cards
            handleClick={handleClick}
            clicked={item.clicked}
            key={item.id}
            id={item.id} 
            name={item.name}
            src={item.src}
          />
      )}
    </div>      
  </div>

  )
}
