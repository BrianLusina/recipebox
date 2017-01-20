import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe("App component tests", function(){
  var div;
  const AppComponent;
  beforeEach(()=>{
    div = document.createElement('div');
    AppComponent = () => (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
  });

  it('renders without crashing', () => {
    ReactDOM.render(<AppComponent />, div);
  });

});
