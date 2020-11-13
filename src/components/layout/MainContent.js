import React from 'react'

import Cards from '../Cards';

import  { pictures } from '../data/data'

export default function MainContent() {

  let pictureData = pictures.map((item) => item)

  return (
    <div className="main-content">
      <div className="grid-container">
        {pictureData.map((item) =>
           <Cards
              key={item.id} 
              name={item.name}
              src={item.src}
           />
        )}
      </div>
      
    </div>
  )
}
