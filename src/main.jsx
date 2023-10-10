import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortfolioApp } from './PortfolioApp';
import './styles/normalize.css';
import { AppTheme } from './theme/AppTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <PortfolioApp />
    </AppTheme>
  </React.StrictMode>,
)