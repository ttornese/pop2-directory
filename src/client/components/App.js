import React, { Component } from 'react';
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

class ScrollToTop extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

const BasicExample = () => (
  <Router>
    <ScrollToTop>
      <ThemeProvider theme={theme}>
        <main className="app-wrapper">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/tracks" component={TrackPage} />
          <Footer />
        </main>
      </ThemeProvider>
    </ScrollToTop>
  </Router>
);
export default BasicExample;
