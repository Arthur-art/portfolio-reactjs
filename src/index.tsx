import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Header } from './components/Header';
import "./global.scss"

ReactDOM.render(
  <>
    <Header />
    <App />
  </>,
  document.getElementById('root')
);
