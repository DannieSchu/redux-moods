import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ history }) => <button onClick={() => history.push('/play')}>Start</button>
;

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
