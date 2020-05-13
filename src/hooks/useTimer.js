import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const ONE_MINUTE = 60;

export const useTimer = () => {
  const [time, setTime] = useState(ONE_MINUTE);
  
  useEffect(() => {
    setInterval(() => {
      if(time > 0) setTime(() => time - 1);
    }, 1000);
    if(time === 0) return <Redirect to="/" />;
  });

  return time;
};
