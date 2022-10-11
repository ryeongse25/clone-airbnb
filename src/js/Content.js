import React from 'react';
import Room from './Room.js';
import '../sass/Content.scss';

const Content = () => {

    return (
        <div className="content">
            <div className="container">
                <div className="rooms">
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                    <Room />
                </div>
            </div>
        </div>
    )
}

export default Content;