import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/shared/Header';
import HomePage from './components/HomePage/HomePage';

const BasicExample = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomePage}/>
    </div>
  </Router>
)
export default BasicExample
