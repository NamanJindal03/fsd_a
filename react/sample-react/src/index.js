import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2'
// import CounterDemo from './CounterDemo'
// import TicTacToe from './TicTacToe';
// import {RandomExec} from './RandomExec'
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css";
import Paint from './Paint'
// import App from './todo/App'
// import App from './forms/App'
// import Cart from './checkout/Cart';
// import App from './hooks/App'
// import App from './reducer/App'
// import App from './transfer/App'
// import App from './ref/App'
// import App from './wrapper/App'
import App from './context/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

