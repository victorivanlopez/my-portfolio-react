import React from 'react';
import ReactDOM from 'react-dom/client';
import { PortfolioApp } from './PortfolioApp';
import './styles/normalize.css';
import { AppTheme } from './theme/AppTheme';
import './styles/spinner.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <PortfolioApp />
    </AppTheme>
  </React.StrictMode>,
)