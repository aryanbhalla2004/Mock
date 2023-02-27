import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {AccountProvider } from './setup/contexts/AuthContext';
Amplify.configure(awsExports);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AccountProvider>
      <Router>
        <App />
      </Router>
    </AccountProvider>
  </React.StrictMode>
);

