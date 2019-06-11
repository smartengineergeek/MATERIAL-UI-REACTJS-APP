import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Course = (props) => (
        <div>
            {props.course ? (
                <Card>
                    {/* <CardMedia style={{height: 0, paddingTop: '56%'}} image={props.course.fields.profile}  title={props.course.fields.name}> */}
                        <CardContent>
                            <Typography 
                                // gutterButton 
                                variant="headline" component="h2">
                                {props.course.fields.name}
                            </Typography>
                            <Typography component="p">
                                {props.course.fields.id}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="props.course.fields.url">Go to Course</Button>
                        </CardActions>
                    {/* </CardMedia> */}
                </Card>
            ): null }
        </div>
)

export default Course;