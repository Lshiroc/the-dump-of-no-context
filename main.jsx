import React from 'react'
import ReactDOM from 'react-dom/client'
import 'https://code.iconify.design/2/2.2.1/iconify.min.js';
import './src/assets/css/style.css';
import App from './src/App';
import Smth from './src/Smth';
import { Provider } from 'react-redux';
import store from './src/store';

ReactDOM.createRoot(document.getElementById('root')).render(  
  <>
  <Provider store={store}>
    <App />
  </Provider>
  </>
)
