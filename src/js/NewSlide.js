import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../sass/NewSlide.scss';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", right: "-30px" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{ ...style, background: "black", left: "-30px", borderRadius: "50%" }}
        onClick={onClick}
        />
    );
}

export default class NewSlide extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 15,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div className="slider">
            <div className="slider-container">
                <div className="elements">
                    <Slider {...settings}>
                        <div style={{width: "76px"}}>
                            <img src="./img/type1.jpeg" />
                            <p>기상천외한 숙소</p>
                        </div>
                        <div>
                            <img src="./img/type2.jpeg" />
                            <p>국립공원</p>
                        </div>
                        <div>
                            <img src="./img/type3.jpeg" />
                            <p>통나무집</p>
                        </div>
                        <div>
                            <img src="./img/type4.jpeg" />
                            <p>열대 지역</p>
                        </div>
                        <div>
                            <img src="./img/type5.jpeg" />
                            <p>섬</p>
                        </div>
                        <div>
                            <img src="./img/type6.jpeg" />
                            <p>해변 근처</p>
                        </div>
                        <div>
                            <img src="./img/type7.jpeg" />
                            <p>초소형 주택</p>
                        </div>
                        <div>
                            <img src="./img/type8.jpeg" />
                            <p>디자인</p>
                        </div>
                        <div>
                            <img src="./img/type9.jpeg" />
                            <p>캠핑카</p>
                        </div>

                        <div>
                            <img src="./img/type10.jpeg" />
                            <p>A자형 주택</p>
                        </div>
                        <div>
                            <img src="./img/type11.jpeg" />
                            <p>호숫가</p>
                        </div>
                        <div>
                            <img src="./img/type12.jpeg" />
                            <p>북극</p>
                        </div>
                        <div>
                            <img src="./img/type13.jpeg" />
                            <p>멋진 수영장</p>
                        </div>
                        <div>
                            <img src="./img/type14.jpeg" />
                            <p>동굴</p>
                        </div>

                        <div>
                            <img src="./img/type15.jpeg" />
                            <p>서핑</p>
                        </div>
                        <div>
                            <img src="./img/type16.jpeg" />
                            <p>최고의 전망</p>
                        </div>
                        <div>
                            <img src="./img/type17.jpeg" />
                            <p>복토주택</p>
                        </div>
                    </Slider>
                </div>
                <div className="filter-box">
                    <i class="bi bi-sliders"></i>
                    <span>필터</span>
                </div>
            </div>
        </div>
      );
    }
}