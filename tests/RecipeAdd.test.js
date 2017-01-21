import React from 'react';
import ReactDOM, { render } from 'react-dom';
import RecipeAdd from '../src/components/RecipeAdd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { shallow } from 'enzyme';
import sinon from 'sinon';


describe("RecipeAdd component tests", function(){
  var div, RecipeAddComponent;
    injectTapEventPlugin();
  
  beforeEach(()=>{
    div = document.createElement('div');

    RecipeAddComponent = () => (
      <MuiThemeProvider>
        <RecipeAdd />
    </MuiThemeProvider>
    );
  });

  it('renders without crashing', () => {
    render(<RecipeAddComponent />, div);
  });

  // it("Adds items to the local storage", ()=>{
  //   const buttonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <RecipeAddComponent onButtonClick={buttonClick}/>
  //   );

  //   wrapper.find('button').simulate("click");

  // });

});
