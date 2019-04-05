import React, { Component } from 'react';
import { Grid, ScrollSync } from 'react-virtualized';
import 'react-virtualized/styles.css';

class ScrollComponent extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          columnWidth: 75,
          columnCount: 50,
          height: 300,
          overscanColumnCount: 0,
          overscanRowCount: 5,
          rowHeight: 40,
          rowCount: 100,
          titleArray: []
        };
    
        // this._renderBodyCell = this._renderBodyCell.bind(this);
        // this._renderHeaderCell = this._renderHeaderCell.bind(this);
        // this._renderLeftSideCell = this._renderLeftSideCell.bind(this);
    }
    componentDidMount(){
        this.fetchServiceData();
    }
    fetchServiceData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                let titleArray = [];
                json.map(singleObject => {
                    titleArray.push(singleObject.title);
                })
                this.setState({titleArray});
            })
    }
    cellRenderer = () => (
        <ul>
        {
            this.state.titleArray.map(title => <li>{title}</li>)
        }
        </ul>
    )
    render(){
        const {
            columnCount,
            columnWidth,
            height,
            overscanColumnCount,
            overscanRowCount,
            rowHeight,
            rowCount,
        } = this.state;
        return(
                this.state.titleArray.length > 0 ? 
                <ScrollSync>
                {({
                    clientHeight,
                    clientWidth,
                    onScroll,
                    scrollHeight,
                    scrollLeft,
                    scrollRight,
                    scrollTop,
                    scrollWidth
                }) => (
                   <Grid 
                    width={200}
                    height={200}
                    headerHeight={10}
                    columnCount={1}
                    columnWidth={200}
                    cellRenderer={this.cellRenderer}
                    rowHeight={50}
                    rowCount={10}
                   />
                )
                } 
            </ScrollSync>                      
                :null
        )
    }
}

export default ScrollComponent;