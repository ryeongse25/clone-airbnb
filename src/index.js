import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './sass/Index.scss';

import Nav from './js/Nav';
import Slider from './js/Slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Nav />
        <hr />
        <Slider />
    </React.StrictMode>
);

reportWebVitals();
