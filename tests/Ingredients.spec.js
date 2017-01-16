import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Ingredients from '../src/components/Ingredients';

describe("Ingredients component tests", function(){
  var div, component;
  beforeEach(()=>{
    div = document.createElement('div');
    component = <Ingredients />
  });

  it('renders without crashing', () => {

    render(component, div);
  });

});
