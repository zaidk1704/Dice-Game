import React, { useState } from 'react'
import StartGame from './components/StartGame'
import './Project3.css'
import GamePlay from './components/GamePlay';

export default function Project3() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{

    setIsGameStarted((prev) => !prev); 
  }

  return (
    <div>
      {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    </div>
  )
}
