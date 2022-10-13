import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './sass/Index.scss';

import Router from './js/Router.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            <Router />
        </div>
    </React.StrictMode>
);

reportWebVitals();
