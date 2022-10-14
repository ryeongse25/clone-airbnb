import Nav from './Nav';
import NewSlide from './NewSlide';
import Footer from './Footer';
import MapComponent from './MapComponent';

const Map = () => {

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

    return (
        <div>
            <Nav />
            <NewSlide />
            <MapComponent />
            <Footer Overlay={overlay} function={showUnderbar}/>
        </div>
    )
}

export default Map;