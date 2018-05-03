import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/shared/Header';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <Header />

      <hr/>

      <Route exact path="/" component={Home}/>
    </div>
  </Router>
)
export default BasicExample
