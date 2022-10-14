import Nav from './Nav';
import NewSlide from './NewSlide';
import Content from './Content';
import Footer from './Footer';
import Underbar from './Underbar';
import { useEffect } from 'react';

const Main = (props) => {

    const overlay = () => {
        return (
            <div className="bg"></div>
        );
    }

    function showUnderbar() {
        let underbar = document.querySelector(".underbar");
        underbar.classList.remove("d-none");
        let div = document.querySelector(".bg");
        div.classList.add("overlay");
    }

    function hideUnderbar() {
        let underbar = document.querySelector(".underbar");
        underbar.classList.add("d-none");
        let div = document.querySelector(".bg");
        div.classList.remove("overlay");
    }

    return (
        <div>
            <Nav />
            <Content />
            <Footer Overlay={overlay} function={showUnderbar} hideFunction={hideUnderbar}/>
            {/* <div className="bg"></div> */}
            {/* <Underbar function={hideUnderbar} /> */}
        </div>
    )
}

export default Main;