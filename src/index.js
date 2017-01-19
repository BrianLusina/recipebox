import React from 'react';
import { render }from 'react-dom';
import App from './components/App';
import './styles/index.css';
import './styles/materialize.min.css';

/**Entry point to application */
render(
  <App />,
  document.getElementById('root')
);
