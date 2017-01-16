import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';

describe("App component tests", function(){
  var div;
  beforeEach(()=>{
    div = document.createElement('div');
  });

  it('renders without crashing', () => {

    ReactDOM.render(<App />, div);
  });

});
