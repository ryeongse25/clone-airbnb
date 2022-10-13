import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Main';
import Map from './Map';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Map" element={<Map />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;