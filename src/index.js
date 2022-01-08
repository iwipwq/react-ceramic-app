import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clayful from 'clayful/client-js';
import { AuthContext } from './context/AuthContext';
import AuthContextProvider from './context/AuthContext';
import axios from 'axios';
import './css/auth.css';


Clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjZjNGMyYmY0ZjJlZjBkYTkzODhiYWE2NjVjOWZjY2JiMjEwMGVlMDRkYTAzYzE0ODgxZjZiNWRhMDU2YmY4ODUiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQxMDE1NjU0LCJzdG9yZSI6IjVZSjRaM1dHUFRaVS4ySlk1RUE4WURWNlgiLCJzdWIiOiJYVEdQNkVXQUVLTVIifQ.8X3gXnVf14AZINYOt3UOR58JUAJCJBPm0asXwNA6jpU'
});

Clayful.install('request', require('clayful/plugins/request-axios')(axios));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
