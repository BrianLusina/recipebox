//**holds all the recipes */
import React, { Component} from 'react';
import { MuiTreeList } from 'react-treeview-mui';


export default class RecipeBook extends Component{
    constructor(props){
        super(props);
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
            return true;
        }
    }

    render(){
        return(
            this._renderRecipes(this.state.recipes)
        )
    }

    /** Checks if the component updated and sets the state*/
    componentDidUpdate(prevProps, prevState){
        if(this.state.recipes !== prevState.recipes){
            var recipes = JSON.parse(localStorage.getItem("recipeBook"))
            this.setState({
                recipes: recipes
            });
        }
        this._renderRecipes(this.state.recipes);
    }

    // loops through the local storage object and displays the items for each recipes
    _renderRecipes(state){
        // array which will store each item
        var items = [];

        // for each recipe item, set the properties for the accordion
        // eslint-disable-next-line
        for(var x in state){
            state[x].depth = 1;
            state[x].children = state[x].ingredients;
            state[x].parentIndex = 0;
            state[x].disabled = false;
            items.push(state[x]);
        }

        return <MuiTreeList 
            listItems={items}
            contentKey={"title"}
        />
    }
}
