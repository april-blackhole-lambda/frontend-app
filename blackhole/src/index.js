import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AppHome from './Components/AppHome'
import './index.css';
import App from './App';

ReactDOM.render(<Router> <AppHome /> </Router>, document.getElementById('root'));

