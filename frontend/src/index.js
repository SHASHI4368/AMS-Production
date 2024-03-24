import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2UVhiQlJPdUBAVHxLflFyVWRTfVx6dlZWESFaRnZdRl1hS3ZTcUdgWHtbc31V"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Route path="/" component={App} />
    </Router>
);