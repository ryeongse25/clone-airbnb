import React, {useEffect, useRef} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../sass/Footer.scss';
import Btn from './Btn';
import FooterComponent from './FooterComponent';
import Underbar from './Underbar';

const Footer = (props) => {

    const location = useLocation();

    const footer = useRef();

    useEffect(() => {
        document.addEventListener("click", function(e) {
            if ( footer.current.contains(e.target) ) {
                return false;
            }
            let menu = document.querySelector(".underbar");
            menu.classList.add("d-none");
            let div = document.querySelector(".bg");
            div.classList.remove("overlay");
        })
    })

    return (<>
        <footer ref={footer}>
            {location.pathname == "/" ? <Link to="/Map"><Btn name="지도 표시하기" class="bi-map-fill" /></Link> : <Link to="/"><Btn name="목록보기" class="bi-list-ul"/></Link>}
            {location.pathname == "/" ? <FooterComponent function={props.function} /> : <FooterComponent height="0px"/>}
            <Underbar hideFunction={props.hideFunction}/>
        </footer>
        <div className="bg"></div>
    </>)
}

export default Footer;