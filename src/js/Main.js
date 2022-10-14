import Nav from './Nav';
import NewSlide from './NewSlide';
import Content from './Content';
import Footer from './Footer';
import Underbar from './Underbar';
import { useEffect } from 'react';

const Main = (props) => {

    return (
        <div>
            <Nav />
            <Content />
            <Footer />
            <Underbar />
        </div>
    )
}

export default Main;