//**holds all the recipes */
import React, { Component} from 'react';
import { MuiTreeList } from 'react-treeview-mui';


export default class RecipeBook extends Component{
    constructor(){
        super();
        // set the current state of the data
        this.state = {
            recipes: JSON.parse(localStorage.getItem("recipeBook"))
        }

        this._renderRecipes = this._renderRecipes.bind(this);
    }
    
    // checks whether the component should update
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.recipes === this.state.recipes){
            return false;
        }else{
            this._renderRecipes();
            return true;
        }
    }

    render(){
        return(
            this._renderRecipes()
        )
    }

    /** Checks if the component updated and sets the state*/
    componentDidUpdate(prevProps, prevState){
        if(this.state.recipes !== prevState.recipes){
            let recipes = JSON.parse(localStorage.getItem("recipeBook"))
            this.setState({
                recipes: recipes
            });
        }
        this._renderRecipes();
    }

    // loops through the local storage object and displays the items for each recipes
    _renderRecipes(){
        var recipes = JSON.parse(localStorage.getItem("recipeBook"));
        // array which will store each item
        var items = [];

        // for each recipe item, set the properties for the accordion
        // eslint-disable-next-line
        for(var x in recipes){
            recipes[x].depth = 1;
            recipes[x].children = recipes[x].ingredients;
            recipes[x].parentIndex = 0;
            recipes[x].disabled = false;
            items.push(recipes[x]);
        }

        return <MuiTreeList 
            listItems={items}
            contentKey={"title"}
        />
    }
}
