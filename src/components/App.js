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

    this.state = {
      initRecipe : [
        { title: "Pumpkin Pie",
          ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]       
        },

        { title: "Spaghetti", 
          ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"] }, 
        
        { title: "Onion Pie", 
        ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
      ]
    }
    
    // sets the initial recipe
    localStorage.setItem("recipeBook", JSON.stringify(this.state.initRecipe));
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
