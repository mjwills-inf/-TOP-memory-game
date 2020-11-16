import React, { useState } from 'react'

import Cards from '../Cards';

import  { pictures } from '../data/data'
let pictureData = pictures.map((item) => {
  item.clicked = false
  return item
})

export default function MainContent(props) {

  const [pictureState, setPictureState] = useState(pictureData)

  const shuffleArray = (array) => {
    for (let i = array.length-1; i>0; i--) {
      let j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }
  
  const setClicked = (array, id) => {
    console.log("array", array)
    console.log("id", id)
    let targetPicture = array.find(item => item.id === Number(id))
    targetPicture.clicked = true
    console.log("targetpicutre",targetPicture)
  }

  const handleClick = (e) => {
    let arrayCopy = pictureState.map((item) => item)

    setClicked(arrayCopy, e.target.getAttribute("data-id"))
    
    shuffleArray(arrayCopy)
    
    setPictureState(arrayCopy)
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
