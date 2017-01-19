/*eslint-disable */

//**Lists all the ingredients for a recipe */
import React, { Component, PropTypes } from 'react';

export default class IngredientList extends Component{
    constructor(props){
        super(props);

        this._createIngredientListView = this._createIngredientListView.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this._createIngredientListView(nextProps.ingredients);
    }

    shouldComponentUpdate(nextProps, nextState){

    }

    render(){
        return(
            <div>

            </div>
        )
    }

    _createIngredientListView(props){
        console.log(props);
    }
}

IngredientList.propTypes = {
    ingredients : PropTypes.array.isRequired
}
