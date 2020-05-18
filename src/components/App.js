import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Moods from './moods/Moods';
import Home from './home/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/play' component={Moods} />
      </Switch>
    </Router>
  );
}
