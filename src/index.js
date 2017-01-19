import React from 'react';
import { render }from 'react-dom';
import App from './components/App';
import './styles/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppComponent = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

/**Entry point to application */
render(
  <AppComponent />,
  document.getElementById('root')
);
