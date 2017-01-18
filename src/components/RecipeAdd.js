import React, { Component } from 'react';
import IngredientList from './Ingredients';
import {Button, Modal } from 'react-materialize';


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
                <Modal
                    header='Modal Header'
                    trigger={
                        <Button waves='light'>MODAL</Button>
                    }>
                    <p>
                    labore et dolore magna aliqu
                    </p>
                </Modal>
            </div>
        )
    }

    /**Opens a Modal to add recipes */
    _addRecipe(){

    }

}

