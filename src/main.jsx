import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortfolioApp } from './PortfolioApp';
import './styles/normalize.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioApp />
  </React.StrictMode>,
)