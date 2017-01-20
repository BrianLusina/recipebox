import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


/**Allows adding of ingredients to recipe book via modal window*/
export default class RecipeAdd extends Component{
    constructor(){
        super();
        this.state = {
            showModal :false
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
        
        // store in an object to later update the local storage object
        let recipe = {
            name: recipeName,
            ingredients: ingredients
        }

        // cache this data in local storage
        var storage = JSON.parse(localStorage.getItem("recipeBook"));
        
        // check if the recipe is already in the localStorage
        for(var x in storage){
            if (storage[x].title.toLowerCase() ===  recipeName){
                // update the ingredients if it is, otherwise add it
                storage[x].ingredients + ingredients;
            }else{
                
            }
        }
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

