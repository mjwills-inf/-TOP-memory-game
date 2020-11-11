import React from 'react'
import Scores from '../components/Scores'

const sidebarStyle = {
  background: '#444',
  color: '#fff',
  width: '200px',
  height: '100%',
  position: 'fixed'
}

export default function Sidebar() {
  return (
    <div
      className="sidebar"
      style={sidebarStyle}
    >
    <Scores />  
    </div>
  )
}
