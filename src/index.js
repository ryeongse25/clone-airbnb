import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './sass/Index.scss';

import Nav from './js/Nav';
import Slider from './js/Slider';
import Content from './js/Content';
import Footer from './js/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Nav />
        <Slider />
        <Content />
        <Footer />
    </React.StrictMode>
);

reportWebVitals();
