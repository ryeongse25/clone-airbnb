import React from 'react';
import '../sass/Room.scss';

const Room = () => {
    return (
        <div className="room">
            <img src="./img/room1.jpeg" />
            <div>
                <p>Sindun-myeon, Icheon-si, 한국</p>
                <p>★ 4.8</p>
            </div>
            <p>46km 거리</p>
            <p>11월 16일~21일</p>
            <p>₩110.694 /박</p>
        </div>
    )
}

export default Room;