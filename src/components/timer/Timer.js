import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ time }) => <h2>Time remaining: {time}</h2>;

Timer.propTypes = {
  time: PropTypes.number.isRequired
};

export default Timer;

