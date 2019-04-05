import React, { Component } from 'react';

import Drawer from './containers/Drawer/Drawer';
import CustomizedExpansionPanel from './containers/ExpansionPanel/ExpansionPanel';
import ScrollComponent from './containers/ScrollComponent/ScrollComponent';

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <ScrollComponent />
      </React.Fragment>
    );
  }
}

export default App;
//        <CustomizedExpansionPanel />
