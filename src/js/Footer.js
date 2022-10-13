import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../sass/Footer.scss';
import Btn from './Btn';
import FooterComponent from './FooterComponent';

const Footer = () => {

    const location = useLocation();

    return (
        <footer>
            {location.pathname == "/" ? <Link to="/Map"><Btn name="지도 표시하기" class="bi-map-fill" /></Link> : <Link to="/"><Btn name="목록보기" class="bi-list-ul"/></Link>}
            {location.pathname == "/" ? <FooterComponent /> : <FooterComponent vis="hidden"/>}
        </footer>
    )
}

export default Footer;