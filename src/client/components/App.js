import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from './shared/Footer';
import Header from './shared/Header';
import HomePage from './HomePage/HomePage';
import theme from '../../lib/theme';
import TrackPage from './TrackPage/TrackPage';

const BasicExample = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <main className="app-wrapper">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/tracks" component={TrackPage} />
        <Footer />
      </main>
    </ThemeProvider>
  </Router>
);
export default BasicExample;
