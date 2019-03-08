import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class  Header extends Component {
    render(){
      const { classes } = this.props;
        return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' className={classes.grow}>
            APP
            </Typography>
            <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
        </div>
        );
    }
}

export default withStyles(styles)(Header);
