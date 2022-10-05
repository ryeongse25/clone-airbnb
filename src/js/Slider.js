import React from 'react';
import '../sass/Slider.scss';

const Slider = () => {
    return (
        <div className="slider">
            <div className="slide-bar"></div>
            <div className="filter-box">
                <i class="bi bi-sliders"></i>
                <p>필터</p>
            </div>
        </div>
    )
}

export default Slider;