/*eslint-disable */

import React, { Component } from 'react';
import IngredientList from './Ingredients';
import {Button, Modal, Row, Input} from 'react-materialize';


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
                    header='Add a recipe'
                    trigger={
                        <Button waves='light'>Add a recipe</Button>
                    }>
                    <Row>
                        <Input s={12} label="Recipe Name"/>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="ingredients_textarea" className="materialize-textarea"></textarea>
                                    <label htmlFor="ingredients_textarea">Ingredients</label>
                                </div>
                            </div>
                        </form>
                    </Row>
                </Modal>
            </div>
        )
    }

    /**Opens a Modal to add recipes */
    _addRecipe(){

    }

}

