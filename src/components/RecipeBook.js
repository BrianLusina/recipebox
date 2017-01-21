/*eslint-disable */
//**holds all the recipes */
import React, { Component, PropTypes } from 'react';

export default class RecipeBook extends Component{
    constructor(props){
        super(props);
        // set the current state of the data
        this.state = {
            recipes: JSON.parse(localStorage.getItem("recipeBook"))
        }

        this._renderRecipes = this._renderRecipes.bind(this);
    }
    
    shouldComponentUpdate(nextProps, nextState){

    }

    render(){
        this._renderRecipes();
        return(
            <div>
            </div>
        )
    }

    // loops through the local storage object and displays the items for each recipes
    _renderRecipes(){
        let rec = this.state.recipes;
        for(var x in rec){
            console.log(rec[x]);
        }
    }
}
