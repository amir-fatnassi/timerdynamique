import React from 'react';
import './Timer.css'

const msToTime = ms => {
  const msPerSecond = 1000
  const msPerMinute = msPerSecond * 60
  const msPerHour = msPerMinute * 60

  const hours = Math.floor(ms / msPerHour)
  const minutes = Math.floor((ms % msPerHour) / msPerMinute)
  const seconds = Math.floor((((ms % msPerHour)) % msPerMinute) / msPerSecond)
  return String(hours).padStart(2,0) + ':' + String(minutes).padStart(2,0) + ':' + String(seconds).padStart(2,0)
}
function Timer({ms}) {
  return (
    <div className="timer">
      <div className="continer">
        <h2 className="tim">{msToTime(ms)}</h2>
        <div className="hms">
            <div className="hour">hour</div>
            <div className="minute">minute</div>
            <div className="seconde">seconde</div>
        </div>
      </div>
    </div>
  );
}

export default Timer ;