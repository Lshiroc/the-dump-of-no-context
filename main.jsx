import React from 'react'
import ReactDOM from 'react-dom/client'
import 'https://code.iconify.design/2/2.2.1/iconify.min.js';
import './src/assets/style/global.css';
import App from './src/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './src/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <Provider store={store}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </>
)
