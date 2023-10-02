import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2'
// import CounterDemo from './CounterDemo'
import TicTacToe from './TicTacToe';
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
);

