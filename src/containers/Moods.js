import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { getFace } from '../selectors/moodSelectors';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import { getCoffees, getSnacks, getNaps, getStudies } from '../selectors/activitySelectors';

export default function Moods() {
  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);

  const handleClick = action => dispatch(action);

  return (
    <>
      <Controls>
        <button onClick={() => handleClick(drinkCoffee)}>coffee - {coffees}</button>
        <button onClick={() => handleClick(eatSnack)}>snacks - {snacks}</button>
        <button onClick={() => handleClick(takeNap)}>naps - {naps}</button>
        <button onClick={() => handleClick(study)}>studies - {studies}</button>
      </Controls>
      <Face emoji={getFace} />
    </>
  );
}

