import React from 'react';
import ReactDOM from 'react-dom';
import baseStyles from './styles/index';
import App from './components/App';

const render = () => {
  baseStyles();
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();
