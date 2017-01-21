import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import localStorage from 'mock-local-storage';


describe("App component tests", function(){
  var div;
  var AppComponent;
  beforeEach(()=>{
    div = document.createElement('div');
    AppComponent = () => (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
  });

  afterEach(()=>{
    //localStorage.clear();
    localStorage.itemInsertionCallback == null;
  });

  it('renders without crashing', () => {
    ReactDOM.render(<AppComponent />, div);
  });

});
