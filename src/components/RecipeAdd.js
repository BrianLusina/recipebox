import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RecipeBook from './RecipeBook';

/**Allows adding of ingredients to recipe book via modal window*/
export default class RecipeAdd extends Component{
    constructor(){
        super();
        this.state = {
            showModal :false,
            updatedRecipe:[]
        }

        this._handleOpen = this._handleOpen.bind(this);
        this._handleClose = this._handleClose.bind(this);
    }


    render(){
    // the actions for the modal screen
        const actions = [
            {label:"Cancel", primary:true, disabled:false, keyboard:false, onTouchTap:this._handleClose},
            {label:"Add recipe", primary:true, disabled:false, keyboard:true, onTouchTap:this._handleClose}
        ];

        var modalActions = actions.map((item, indx)=>{
            return <FlatButton key={indx}
                label={item.label}
                primary={item.primary}
                disabled={item.disabled}
                keyboardFocused={item.keyboard}
                onTouchTap={item.onTouchTap}
            />
        });

        return(
            <div>
                <RecipeBook recipeProps={this.state.updatedRecipe}/>
                <div>
                    <RaisedButton label="Add Recipe" onTouchTap={this._handleOpen} />
                    <Dialog
                        title="Add a new Recipe"
                        actions={modalActions}
                        modal={true}
                        open={this.state.showModal}>
                        
                        <TextField
                            id="recipeName"
                            floatingLabelText="Recipe name"
                            style={{
                                width:"100%"
                            }}/>

                        <TextField
                            id="ingredients"
                            hintText="Enter ingredients, seperated by commas"
                            floatingLabelText="Ingredients"
                            multiLine={true}
                            rows={5}
                            style={{
                                width:"100%"
                            }}/>
                    </Dialog>
                </div>

            </div>
        )
    }

    /**adds the recipes and passes them to RecipeBook */
    _addRecipe(){
        // fetch the ingredients and the recipe name
        var recipeName = document.getElementById("recipeName").value;
        var ingredients = document.getElementById("ingredients").value.split(",");

        // remove all white space from each word in the ingredient list
        ingredients = ingredients.map(function(e){
            return e.trim();
        });

        // store in an object to later update the local storage object
        let recipe = {
            title: recipeName,
            ingredients: ingredients
        }

        // cache this data in local storage
        var storage = JSON.parse(localStorage.getItem("recipeBook")) || [];
        var exists = false;

        // check if the recipe is already in the localStorage
        for(var i = 0; i < storage.length; i++){
            if(storage[i].title === recipeName){
                exists = true;
                break;
            }
        }

        // if it does not exist add it to the storage
        if(!exists){
            if(recipeName.length < 1) recipeName = "Untitled";
            storage.push(recipe);
        }
        
        //update the local storage
        localStorage.setItem("recipeBook", JSON.stringify(storage));
        
        // update the recipe
        this.setState({
            updatedRecipe: JSON.parse(localStorage["recipeBook"])
        });
        
    }

    /*Handles opening of the modal screen*/
    _handleOpen(){
        this.setState({showModal:true});
    }

    /**Handles the closing of the modal and fetches the ingredients from the text fields*/
    _handleClose(){
        this.setState({showModal:false});
        this._addRecipe();
    }

}

