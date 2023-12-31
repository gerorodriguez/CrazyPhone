import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AuthContextProvider from './contexts/AuthContext.jsx';
import { ThemeContextProvider } from './contexts/theme/theme.context.jsx'
import { APIContextProvider } from './services/ApiContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIContextProvider>
      <ThemeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ThemeContextProvider>
    </APIContextProvider>
  </React.StrictMode>,
);
