import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Recipe from '../src/components/Recipe';

describe("Recipe component tests", function(){
  var div, component;
  beforeEach(()=>{
    div = document.createElement('div');
    component = <Recipe />
  });

  it('renders without crashing', () => {

    render(component, div);
  });

});
