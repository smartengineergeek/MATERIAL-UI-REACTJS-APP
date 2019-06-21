import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import WindowSizeListener from 'react-window-size-listener';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    control: {
        padding: theme.spacing(2)
    }
}));

export default function SpacingGrid(){
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    function handleChange(event, value){
        setSpacing(Number(value));
    }
    return(
        <>
        <WindowSizeListener onResize={windowSize => (
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {[0,1,2].map(value => (
                            <Grid key={value} item>
                                <Paper style={{'height': (windowSize.windowHeight)/3, 'width': (windowSize.windowWidth)/3}} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        )}/>
        </>
    )
}