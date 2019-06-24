import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Table from './containers/Table/Table';
// import Cards from './containers/Cards/Cards';
// import Grid from './containers/Grid/Grid';
// import { ThemeProvider } from '@material-ui/styles';
import ReactSlick from './containers/Slider/Slider';
import Box from './containers/Box/Box';
import MaterialTable from './containers/MaterialTable/MaterialTable';
import Edit from './containers/Table/Edit';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ReactSlick}/>
      <Route path='/table/edit' component={Edit} />
      <Route path='/table' component={Table}/>
      <Route path='/box' component={Box} />
      <Route path='/material-table' component={MaterialTable} />
    </Switch>
  </main>
)

export default Main;
