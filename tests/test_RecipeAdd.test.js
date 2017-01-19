import React from 'react';
import ReactDOM, { render } from 'react-dom';
import RecipeAdd from '../src/components/RecipeAdd';

describe("RecipeAdd component tests", function(){
  var div, component;
  beforeEach(()=>{
    div = document.createElement('div');
    component = <RecipeAdd />
  });

  it('renders without crashing', () => {

    render(component, div);
  });

});
