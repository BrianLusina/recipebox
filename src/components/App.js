import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import '../styles/App.css';
import RecipeBook from './RecipeBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeBook />
      </div>
    );
  }
}

export default App;
