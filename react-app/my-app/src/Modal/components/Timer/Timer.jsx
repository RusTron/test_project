import React, { useState } from 'react';
import { useEffect } from 'react';
import watch from '../../../images/timer.svg';
import './Timer.scss';

export const Timer = () => {
  const [timer, setTimer] = useState({m: 16, d: 0, s: 0});
    let {m , d, s } = timer;
  
    const time = () => {
    if (s) {
      s = s - 1;
    } else if (d) {
      d = d -1;
      s = 9;
    } else if (m) {
      m = m -1;
      d = 5;
      s = 9
    }

    return setTimer({m, d, s});
  }
  
  const startTimer = () => {
    debugger;
    setInterval(time, 1000);
  };

  useEffect(()=> {
    startTimer();
  }, []);

  return (
    <div className="modal__timer">
      <div className="modal__timer-image">
        <img src={watch}></img>
      </div>
      <div className="modal__timer-item">
        {`00:${timer.m}:${timer.d}${timer.s}`}
      </div>
    </div>
  )
}
