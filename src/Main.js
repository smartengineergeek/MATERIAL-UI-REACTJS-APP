import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Table from './containers/Table/Table';
// import Cards from './containers/Cards/Cards';
// import Grid from './containers/Grid/Grid';
// import { ThemeProvider } from '@material-ui/styles';
import ReactSlick from './containers/Slider/Slider';
import Box from './containers/Box/Box';

const Main = () => (
    <main>
    <Switch>
      <Route exact path='/' component={ReactSlick}/>
      <Route path='/table' component={Table}/>
      <Route path='/box' component={Box} />
    </Switch>
  </main>
)

export default Main;