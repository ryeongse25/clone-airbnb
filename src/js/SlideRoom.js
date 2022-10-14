import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sass/SlideRoom.scss';

const SlideRoom = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const slider = React.useRef();
    const div = React.useRef();

    const onMouseOver = () => {
        let left_btn = div.current.childNodes[1];
        let right_btn = div.current.childNodes[2];
        left_btn.classList.remove("d-none");
        right_btn.classList.remove("d-none");
    }

    const onMouseLeave = () => {
        let left_btn = div.current.childNodes[1];
        let right_btn = div.current.childNodes[2];
        left_btn.classList.add("d-none");
        right_btn.classList.add("d-none");
    }

    return (
        <div className="room">
            <div className="room-slide">
                <i className="bi bi-heart-fill"></i>
                <i className="bi bi-heart"></i>
                <div className="carousel-slider" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} ref={div}>
                    <Slider {...settings} dotsClass="dot-css" style={{height: '100%'}} ref={slider}>
                        <div>
                            <img src={"./img/" + props.img} />
                        </div>
                        <div>
                        <img src={"./img/" + props.img} />
                        </div>
                        <div>
                        <img src={"./img/" + props.img} />
                        </div>
                        <div>
                        <img src={"./img/" + props.img} />
                        </div>
                        <div>
                        <img src={"./img/" + props.img} />
                        </div>
                    </Slider>
                    <button className="left d-none" onClick={() => slider?.current?.slickPrev()}>&lt;</button>
                    <button className="right d-none" onClick={() => slider?.current?.slickNext()}>&gt;</button>
                </div>
                </div>
            <div>
            <div className="title">
                <p>{props.title}</p>
                <p>★ {props.star}</p>
            </div>
            <p>46km 거리</p>
            <p>11월 16일 ~ 21일</p>
            <p className="price"><span>₩110.694</span> /박</p>
            </div>
           
        </div>
    );
}

export default SlideRoom;