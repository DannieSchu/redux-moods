import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Controls from '../controls/Controls';
import Face from '../face/Face';
import Timer from '../timer/Timer';
import { getFace } from '../../selectors/moodSelectors';
import { getCoffees, getSnacks, getNaps, getStudies } from '../../selectors/activitySelectors';
import { drinkCoffee, eatSnack, takeNap, study } from '../../actions/moodActions';
import { useTimer } from '../../hooks/timer';

const Moods = ({ history }) => {
  const dispatch = useDispatch();
  const coffees = useSelector(getCoffees);
  const snacks = useSelector(getSnacks);
  const naps = useSelector(getNaps);
  const studies = useSelector(getStudies);
  const face = useSelector(getFace);
  const time = useTimer({ history });

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

Moods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Moods;
