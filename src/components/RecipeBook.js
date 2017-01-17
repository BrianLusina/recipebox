//**holds all the recipes */
import React, { Component, PropTypes } from 'react';

export default class RecipeBook extends Component{
    constructor(props){
        super(props);
        // set the current state of the data
        this.state = {
            recipeArr = []
        }
    }

    componentWillRecieveProps(){

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

RecipeBook.propTypes = {
    recipeData = PropTypes.object.isRequired
}

