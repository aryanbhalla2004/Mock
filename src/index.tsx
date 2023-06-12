import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Amplify, Storage } from 'aws-amplify';
import awsExports from './aws-exports';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AccountProvider } from './setup/contexts/AuthContext';
import { DbProvider } from './setup/contexts/dbContext';
Amplify.configure(awsExports);

Storage.configure({
  region: awsExports.aws_user_files_s3_bucket_region,
  bucket: awsExports.aws_user_files_s3_bucket,
  identityPoolId: awsExports.aws_user_pools_id,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DbProvider>
      <AccountProvider>
        <Router>
          <App />
          <ToastContainer autoClose={8000} />
        </Router>
      </AccountProvider>
    </DbProvider>
  </React.StrictMode>
);

