import React from 'react';
import Room from './Room.js';
import '../sass/Content.scss';

const Content = () => {
    return (
        <div className="container">
            <div className="content">
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
            </div>
        </div>
    )
}

export default Content;