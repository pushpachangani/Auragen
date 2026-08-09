import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuraProvider } from './context/AuraContext';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuraProvider>
        <App />
      </AuraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
