import React from 'react'

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px'
}

export default function Header() {
  
  return (
    <header
      className="header"
      style={headerStyle}
    >
      <h1>Visual Memory Test</h1>
      <h3>Artwork of Dan Hillier</h3>
    </header>
  )
}