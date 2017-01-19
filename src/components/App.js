import React, { Component } from 'react';
import '../styles/App.css';
import RecipeBook from './RecipeBook';
import RecipeAdd from './RecipeAdd';
import injectTapEventPlugin from 'react-tap-event-plugin';

/**Assembles all the components and arranges them in order */
class App extends Component {
  constructor(){
    super();

    // Needed for onTouchTap
    // http://stackoverflow.com/a/34015469/988941  
    injectTapEventPlugin();
  }

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
