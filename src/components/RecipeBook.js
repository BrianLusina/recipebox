//**holds all the recipes */
import React, { Component, PropTypes} from 'react';
import { MuiTreeList } from 'react-treeview-mui';


export default class RecipeBook extends Component{
    constructor(){
        super();

        this._renderRecipes = this._renderRecipes.bind(this);
    }

    // called when receiving props
    componentWillReceiveProps(nextProps){
        this._renderRecipes(nextProps);
    }

    // checks whether the component should update based on the props and the state
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.recipeProps ===  nextProps.recipeProps){
            return false;
        }else{
            return true;
        }
    }

    render(){
        return(
            this._renderRecipes(this.props.recipeProps)
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
    }

    // loops through the local storage object and displays the items for each recipes
    _renderRecipes(props){
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

// set the required prop types for the RecipeBook object
RecipeBook.propTypes = {
    recipeProps : PropTypes.array.isRequired
}