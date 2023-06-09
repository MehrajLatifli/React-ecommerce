import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './scss/main.scss'
import { Provider } from 'react-redux';
import { store } from './stores/store'
import { Route, Routes } from 'react-router-dom';
import Basket from './pages/Basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>
);

