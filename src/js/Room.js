import React, {useEffect} from 'react';
import '../sass/Room.scss';

const Room = () => {

    useEffect(() => {
        let img = document.querySelectorAll(".room img");
        for (let i=0; i<img.length; i++) {
            img[i].style.height = img[i].clientWidth - 10 + "px";
        }

        window.addEventListener('resize', () => {
            for (let i=0; i<img.length; i++) {
                img[i].style.height = img[i].clientWidth - 10 + "px";
            }
        })

        let pictures = document.querySelector(".pictures");

        pictures.addEventListener('mouseover', () => {
            let btn = document.querySelectorAll(".carousel-slider button");

            for (let i=0; i<btn.length; i++) {
                btn[i].style.color = "black";
                btn[i].style.backgroundColor = "white";
            }
        })

        pictures.addEventListener('mouseleave', () => {
            let btn = document.querySelectorAll(".carousel-slider button");

            for (let i=0; i<btn.length; i++) {
                btn[i].style.color = "transparent";
                btn[i].style.backgroundColor = "transparent";
            }
        })
    })

    return (
        <div className="room">
            <div className="carousel-slider">
                <div className="pictures">
                    <img src="./img/room1.jpeg" />
                </div>
                <button className="prev_button"><i class="bi bi-chevron-left"></i></button>
                <button className="next_button"><i class="bi bi-chevron-right"></i></button>
            </div>
            {/* <ul className="dots">
                <li className="dot" value="0"></li>
                <li className="dot" value="1"></li>
                <li className="dot" value="2"></li>
                <li className="dot" value="3"></li>
                <li className="dot" value="4"></li>
            </ul> */}
            <div className="title">
                <p>Sindun-myeon, Icheon-si, 한국</p>
                <p>★ 4.8</p>
            </div>
            <p>46km 거리</p>
            <p>11월 16일 ~ 21일</p>
            <p className="price"><span>₩110.694</span> /박</p>
        </div>
    )
}

export default Room;