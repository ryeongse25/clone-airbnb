import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './sass/Index.scss';

import Nav from './js/Nav';
import Slider from './js/Slider';
import Content from './js/Content';
import Footer from './js/Footer';
import Map from './js/Map';
import Underbar from './js/Underbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Nav />
            <Slider />
            <Content />
            <Footer />
            <Underbar />
            <Map />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
