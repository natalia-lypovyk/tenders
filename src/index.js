import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'ustudio-ui/theme';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
