import React from 'react';
import Room from './Room.js';
import SlideRoom from './SlideRoom.js';
import '../sass/Content.scss';

const Content = () => {

    return (
        <div className="content">
            <div className="container">
                <div className="rooms">
                    <SlideRoom />
                    <SlideRoom />
                    <SlideRoom />
                    <SlideRoom />
                    <SlideRoom />
                    <SlideRoom />
                    <SlideRoom />
                </div>
            </div>
        </div>
    )
}

export default Content;