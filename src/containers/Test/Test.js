/*
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
*/
import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  myButton: {
    color: 'green',
    margin:{
      top:5 ,
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      fontWeight: 'bold'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
});

const Button = ({children}) => {
  const classes = useStyles()
  return(
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}


export default Button;