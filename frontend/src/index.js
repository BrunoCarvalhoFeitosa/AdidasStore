import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1>App</h1>
  );
};

const container = document.querySelector('#root');
container ? ReactDOM(<App />, container) : false;