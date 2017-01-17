import React, { Component } from 'react';
import IngredientList from './Ingredients';

/**Allows adding of ingredients to recipe book*/
export default class RecipeAdd extends Component{
    constructor(){
        super();
        this.state = {
            showModal :false
        }
    }
    render(){
        return(
            <div>
                <a className="waves-effect waves-light btn" href="#modal1">Modal</a>
                
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    
                    <div className="modal-footer">
                        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>            
            </div>
        )
    }

    /**Opens a Modal to add recipes */
    _addRecipe(){

    }

}

