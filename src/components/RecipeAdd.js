import React, { Component } from 'react';
import IngredientList from './Ingredients';
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
                        
                        <form className="row">
                            <TextField 
                                className="column s12"
                                floatingLabelText="Recipe name"
                                style={{
                                    width:"100%"
                                }}/>

                            <TextField
                                className="column s12"                            
                                hintText="Enter ingredients, seperated by commas"
                                floatingLabelText="Ingredients"
                                multiLine={true}
                                rows={5}/>

                        </form>
                    </Dialog>
                </div>

            </div>
        )
    }

    /**Opens a Modal to add recipes */
    _addRecipe(){

    }


    /*Handles opening of the modal screen
     */
    _handleOpen(){
        this.setState({showModal:true});
    }

    /**Handles the closing of the modal */
    _handleClose(){
        this.setState({showModal:false});
    }

}

