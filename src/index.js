import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './sass/Index.scss';

import Nav from './js/Nav';
import Slider from './js/Slider';
import Content from './js/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Nav />
        <hr />
        <Slider />
        <Content />
    </React.StrictMode>
);

reportWebVitals();
