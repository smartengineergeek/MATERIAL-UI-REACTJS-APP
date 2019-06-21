import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { withWindowSizeListener } from 'react-window-size-listener';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2)
    }
}));

function SpacingGrid(props){
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    function handleChange(event, value){
        setSpacing(Number(value));
    }
    return(
        <>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container 
                        //  justify="center" 
                        spacing={spacing}>
                        {[0,1,2,3,4,5,6,7,8].map(value => (
                            <Grid key={value} item>
                                <Paper style={{'height': '200px', 'width': (props.windowSize.windowWidth)/4, 'border': 'solid 1px #000'}} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default withWindowSizeListener(SpacingGrid);

//                                 