import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './HomePage/HomePage';
import TrackPage from './TrackPage/TrackPage';

const BasicExample = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/track" component={TrackPage}/>
    </div>
  </Router>
)
export default BasicExample
