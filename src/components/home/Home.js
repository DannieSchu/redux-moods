import React from 'react';
import PropTypes from 'prop-types';

export const Home = ({ history }) =>
  <button onClick={() => history.push('/play')}>Start</button>;

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
