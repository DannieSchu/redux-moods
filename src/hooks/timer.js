import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reset } from '../actions/moodActions';

const ONE_MINUTE = 60;

export const useTimer = ({ history }) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(ONE_MINUTE);

  useEffect(() => {
    setTimeout(() => {
      if(time > 0) setTime(() => time - 1);
      else { 
        dispatch(reset());
        return history.push('/'); 
      }
    }, 1000);
  });

  return time;
};

