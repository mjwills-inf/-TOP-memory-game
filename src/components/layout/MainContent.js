import React from 'react'

import Cards from '../Cards';

import  { pictures } from '../data/data'
let pictureData = pictures.map((item) => {
  item.clicked = false
  item.order = item.indexOf()
  return item
})

export default function MainContent() {

  const setClicked = (e) => {
    console.log(e.target)
    pictureData[e.target.props.id].clicked = true
  }  


  return (
    <div className="main-content">
      <div className="grid-container">
        {pictureData.map((item) =>
           <Cards
              clicked={item.clicked}
              setClicked={setClicked}
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
