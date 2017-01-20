import React from 'react';
import ReactDOM, { render } from 'react-dom';
import RecipeBook from '../src/components/RecipeBook';

describe("RecipeBook component tests", function(){
  var div, component;
  beforeEach(()=>{
    div = document.createElement('div');
    component = <RecipeBook />
  });

  it('renders without crashing', () => {

    render(component, div);
  });

});
