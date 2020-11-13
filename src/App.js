import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import React, { useState } from 'react'


function App() {

  let [score, setScore] = useState(0)
  let [best, setBest] = useState(0)

  const resetScores = (current) => {
    best = current > best ? setBest(current) : best
    setScore(0) 
  }

  const plusScore = () => setScore(score + 1)

  return (
    <div className="App">
      <div className="header-wrap">
        <Header />
      </div>
      <div className="side-page-wrap">
        <Sidebar 
          score={score}
          best={best}
        />      
        <MainContent />
      </div>
    </div>
  );
}

export default App;
