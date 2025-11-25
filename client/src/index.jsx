import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ConfigProvider } from 'antd'; // Import ConfigProvider

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('yajouraToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="363327488969-73qqer5jgeg2cfo4iha9kqfbc1dg18dv.apps.googleusercontent.com">
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
