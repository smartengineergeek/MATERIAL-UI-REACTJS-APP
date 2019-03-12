import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import UserMenu from '../UserMenu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,    
    height: 350
  }
});

class GuttersGridFirstRow extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper} >
              <UserMenu/>            
            </Paper>
          </Grid>
        </Grid>
      </div>
      );
  }
}

GuttersGridFirstRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGridFirstRow);