import React from 'react';
import ReactDOM, { render } from 'react-dom';
import RecipeAdd from '../src/components/RecipeAdd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


describe("RecipeAdd component tests", function(){
  var div, RecipeAddComponent;
  
  beforeEach(()=>{
    div = document.createElement('div');

    injectTapEventPlugin();

    RecipeAddComponent = () => (
      <MuiThemeProvider>
        <RecipeAdd />
    </MuiThemeProvider>
    );
  });

  it('renders without crashing', () => {
    render(<RecipeAddComponent />, div);
  });

});
