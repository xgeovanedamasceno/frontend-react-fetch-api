import React from 'react';
import ReactDOM from 'react-dom';
import ResetCSS from './reset-css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
