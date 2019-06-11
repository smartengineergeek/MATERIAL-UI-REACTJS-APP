import React, { Component } from 'react';

import Navbar from './containers/Navbar/Navbar';
// import CoursesList from './containers/CoursesList/CoursesList';

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
