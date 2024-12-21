import React, { useState, useRef } from 'react';

function Timer() {
  const [timer,setTimer]=useState({time:0})
  const intervalRef = useRef(null);
  function startTimer(event){
    event.preventDefault();
    if (intervalRef.current) return; 
    intervalRef.current=setInterval(() => {
    setTimer(prevState => ({ time: prevState.time + 1 }));
    }, 1000);
  }
  function stopTimer(){
    clearInterval(intervalRef.current);  // Stop the timer
    intervalRef.current = null;
  }
  function reset(){
    setTimer({time:0})
  }

  return (
    <div>
      <div>
      {timer.time}
      </div>
      <div>     
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={reset}>Reset</button>
      </div>

    </div>
  )
}


export default Timer
