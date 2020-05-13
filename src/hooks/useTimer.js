import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reset } from '../actions/moodActions';

const ONE_MINUTE = 60;

export const useTimer = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(ONE_MINUTE);

  useEffect(() => {
    setInterval(() => {
      if(time > 0) setTime(() => time - 1);
    }, 1000);
    if(time === 0) {
      dispatch(reset());
      return <Redirect to="/" />;
    }
  });

  return time;
};
