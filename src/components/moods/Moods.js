import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Controls from '../controls/Controls';
import Face from '../face/Face';
import Timer from '../timer/Timer';
import { getFace } from '../../selectors/moodSelectors';
import { getCoffees, getSnacks, getNaps, getStudies } from '../../selectors/activitySelectors';
import { drinkCoffee, eatSnack, takeNap, study } from '../../actions/moodActions';

const ONE_MINUTE = 60;

const Moods = () => {
  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);
  const face = useSelector(getFace);

  const [time, setTime] = useState(ONE_MINUTE);
  
  useEffect(() => {
    setInterval(() => {
      if(time > 0) setTime(() => time - 1);
    }, 1000);
    if(time === 0) return <Redirect to="/" />;
  });

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>naps - {naps}</button>
        <button onClick={() => dispatch(study())}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
      <Timer time={time} />
    </>
  );
};

export default Moods;

