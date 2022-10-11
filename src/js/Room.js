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
    })

    return (
        <div className="room">
            <img src="./img/room1.jpeg" />
            <div>
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