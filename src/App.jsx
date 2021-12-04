import React, { useState, useEffect } from 'react'
import Temporizador from './components/Temporizador'
import "./App.css"


const App = () => {

  let [seconds, setSeconds] = useState(40);
  let [isRed, setIsRed] = useState(false);

  const startTimer = () => {

    if (seconds !== 0) {
      setSeconds(seconds - 1)
      setIsRed(true)
    }

  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <h1>Temporizador</h1>
      <br />
      <Temporizador seconds={seconds} />
    </div>
  )
}

export default App
