import React from 'react'

import Cards from '../Cards';

import  { pictures } from '../data/data'


const mainDivStyle = {
  padding: '10px'
}

export default function MainContent() {
  return (
    <div 
      className="main-div"
    >
      {pictures.map((item) =>
           <Cards
              key={item.id} 
              name={item.name}
              src={item.src}
           />
        )}
      
    </div>
  )
}
