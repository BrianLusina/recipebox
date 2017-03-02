//**holds all the recipes */
import React, { Component, PropTypes} from 'react';

export default class RecipeBook extends Component{
    constructor(props){
        super(props);
        this.state = {
            recipeViews : []
        }

        this._renderRecipes = this._renderRecipes.bind(this);
    }

    // called when receiving props
    componentWillReceiveProps(nextProps){
        this._renderRecipes(nextProps);
    }

    // checks whether the component should update based on the props and the state
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.recipeProps ===  nextProps.recipeProps && 
        this.state.recipeViews === nextState.recipeViews){
            return false;
        }else{
            return true;
        }
    }

    render(){
        return(
            <ul className="cd-accordion-menu animated">
                {this.state.recipeViews}
            </ul>
        )
    }

    /** Checks if the component updated and sets the state*/
    componentDidUpdate(prevProps, prevState){
        if(this.state.recipes !== prevState.recipes){
            let recipeViews = this._renderRecipes(prevProps);
            this.setState({
                recipeViews: recipeViews
            });
        }
    }

    // loops through the local storage object and displays the items for each recipes
    _renderRecipes(receivedProps){
        var recipeViews= receivedProps.recipeProps.map((item, indx)=>{
            return<li key={indx} className="has-children">
    			        <input type="checkbox" name={"group-"+ indx} id={"group-"+indx}/>
	    		        <label htmlFor={"group-"+indx}>{item.title}</label>
                        <ul>{item.ingredients.map(listView)}</ul>
                        
                </li>
        });
        
        function listView(ingredient, indx){
            return (<li key={indx}><a href="#0">{ingredient}</a></li>)
        }
        // update the state
        this.setState({
            recipeViews : recipeViews
        })
    }
}

// set the required prop types for the RecipeBook object
RecipeBook.propTypes = {
    recipeProps : PropTypes.array.isRequired
}