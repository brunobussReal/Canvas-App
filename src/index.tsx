import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StageProvider } from './contexts/StageContext';

ReactDOM.render(
  <React.StrictMode>
    <StageProvider>
    <App />
    </StageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

