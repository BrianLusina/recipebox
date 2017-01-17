//**Lists all the ingredients for a recipe */
import React, { Component, PropTypes } from 'react';

export default class IngredientList extends Component{

    componentWillReceiveProps(){

    }

    shouldComponentUpdate(nextProps, nextState){

    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

IngredientList.propTypes = {
    ingredients = PropTypes.array.isRequired;
}
