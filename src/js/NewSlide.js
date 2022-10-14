import React, { Component, createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sass/NewSlide.scss';
import Menu from './Menu.js';

export default class NewSlide extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title : ['기상천외한 숙소', '국립공원', '통나무집', '열대 지역', '섬', '해변 근처', '초소형 주택', '디자인', '캠핑카', 'A자형 주택', '호숫가', '북극', '멋진 수영장', '동굴', '서핑', '최고의 전망', '복토주택']
        }
    }

    render() {
        const settings = {
            arrows: false,
            dots: false,
            infinite: false,
            slidesToShow: 15,
            slidesToScroll: 10,
            responsive: [
                {
                    breakpoint: 650,
                    settings: { slidesToShow: 4, slidesToScroll: 2, infinite: false }
                },
                {
                    breakpoint: 850,
                    settings: { slidesToShow: 6, slidesToScroll: 3, infinite: false }
                },
                {
                breakpoint: 1000,
                settings: { slidesToShow: 8, slidesToScroll: 4, infinite: false }
                },
                {
                breakpoint: 1300,
                settings: { slidesToShow: 10, slidesToScroll: 5, infinite: false }
                },
                {
                breakpoint: 1480,
                settings: { slidesToShow: 12, slidesToScroll: 6, infinite: false }
                }
            ]
        };
 
        const slider = React.createRef();

        return (
            <div className="slider">
                <div className="slider-container">
                    <div className="elements">
                        <Slider ref={slider} {...settings}>
                            {this.state.title.map((title, idx) => {
                                return <Menu key={idx+1} img={idx+1} title={title} function={this.props.function} style={{borderBottom : "2px solid transparent"}}/>
                            })}
                        </Slider>
                        <button className="left" onClick={() => slider?.current?.slickPrev()}>&lt;</button>
                        <button onClick={() => slider?.current?.slickNext()}>&gt;</button>
                    </div>
                    <div className="filter-box">
                        <i className="bi bi-sliders"></i>
                        <span>필터</span>
                    </div>
                </div>
            </div>
        );
    }
}