import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import '../styles/App.css';
import RecipeBook from './RecipeBook';
import RecipeAdd from './RecipeAdd';

/**Assembles all the components and arranges them in order */
class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeBook />
        <RecipeAdd />
      </div>
    );
  }
}

export default App;
