import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful';

import Course from '../Course/Course';

const SPACE_ID = 'klcjfjxqhy56';
const ACCESS_TOKEN = 'lho3kzCpCAydFJoZqwPhThFDNsD9JgNrrXpXH0EoFlY';
// const ACCESS_TOKEN = '4NOELb1rdXKmfUFyBY5PUAzZXhIMtbqmWar87ajC2HQ';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class CoursesList extends Component{
    state = {
        courses: [],
        searchString: ''
    }
    constructor(props){
        super(props);
        this.getCourses();
    }
    getCourses = () => {
        client.getEntries({
            content_type: 'test',
            query: this.state.searchString
        })
        .then((response) => {
            console.log(response.items[0].fields)
            this.setState({ courses: response.items});
            // console.log('error');
        })
    }
    onSearchInputChange = (event) => {
        console.log("Search changed..."+ event.target.value)
        if(event.target.value){
            this.setState({searchString: event.target.value});
        }else {
            this.setState({searchString: ''});
        }
    }
    render(){
        return(
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField 
                            style={{padding: 24}}
                            id="searchInput"
                            placeholder="search for Courses"
                            margin="normal"
                            onChange={(event) => this.onSearchInputChange(event)}
                        />
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.courses.map(currentCourse => (
                                <Grid key={currentCourse.fields.id} item xs={12} sm={6} lg={4} xs={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ): "No courses found"
                }
            </div>
        )
    }
}

export default CoursesList;