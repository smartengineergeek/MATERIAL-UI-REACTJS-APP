import React from 'react';
import Slider from 'react-slick';
import { ic_navigate_next as NEXT } from 'react-icons-kit/md/ic_navigate_next';
import { ic_navigate_before as BEFORE } from 'react-icons-kit/md/ic_navigate_before';
import { Icon } from 'react-icons-kit';
import jQuery from 'jquery';

import './Slider.css';

class ReactSlick extends React.Component{
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.sliderRef = React.createRef();
    }
    state = {
        data: null
    }
    componentDidMount(){
        this.fetchServiceData();
        // jQuery('.slick-slider').css({width: '1700px'});
    }
    fetchServiceData = () => {
        fetch('https://picsum.photos/v2/list')
            .then(response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(data => {
                    //console.log(data);
                    this.setState({data});
                });
            })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render(){
        var settings = {
            dots: false,
            infinite: false,
            speed: 800,
            slidesToShow: 3,
            // slidesToScroll: 4,
            // centerMode: true,
            // centerPadding: '5px',
            focusOnSelect: true,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
            // afterChange: ,
            // beforeChange: , 
            responsive: [
                {
                  breakpoint: 1880,
                  settings: {
                    slidesToShow: 3,
                  },
                },  
                {
                    breakpoint: 1536,
                    settings: {
                      slidesToShow: 3,
                    },
                },  
                {
                  breakpoint: 1440,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  },
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  },
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    },
                },  
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  },
                },
            ]
        };
        return(
            <React.Fragment>
            {
                this.state.data !== null ?
                <>
                <Slider ref={slider => (this.sliderRef = slider)} {...settings} className="mui-slider">
                {
                    this.state.data.map(item => <div key={item.id}><img className="slider-img" src={item.download_url} alt={item.author} /></div>)
                }
                </Slider>
                {/* <div style={{textAlign: 'center'}}>
                    <button className="button" onClick={this.previous}>Previous</button>
                    <button className="button" onClick={this.next}>Next</button>
                </div> */}
                </>                
                : null
            }
            </React.Fragment>
        )
    }
}

function SamplePrevArrow(props){
    const { style, onClick } = props;
    return(
    <div
    className="custom-arrow-prev slick-arrow arrow-inactive"
    style={{ ...style }}
    onClick={onClick}
    >
        <Icon icon={BEFORE} size={64} />
    </div>
    )
}

function SampleNextArrow(props){
    const { style, onClick } = props;
    return(
        <div
        className="custom-arrow-next slick-arrow"
        style={{ ...style }}
        onClick={onClick}
        >
        <Icon icon={NEXT} size={64} />
        </div>
    )
}

export default ReactSlick;