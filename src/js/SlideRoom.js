import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sass/SlideRoom.scss';

const SlideRoom = () => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
    };

    return (
        <div className="room">
            <div className="carousel-slider">
                <Slider {...settings}>
                    <div>
                        <img src="./img/room1.jpeg" />
                    </div>
                    <div>
                        <img src="./img/room1.jpeg" />
                    </div>
                    <div>
                        <img src="./img/room1.jpeg" />
                    </div>
                    <div>
                        <img src="./img/room1.jpeg" />
                    </div>
                    <div>
                        <img src="./img/room1.jpeg" />
                    </div>
                </Slider>
            </div>
            <div className="title">
                <p>Sindun-myeon, Icheon-si, 한국</p>
                <p>★ 4.8</p>
            </div>
            <p>46km 거리</p>
            <p>11월 16일 ~ 21일</p>
            <p className="price"><span>₩110.694</span> /박</p>
        </div>
    );
}

export default SlideRoom;