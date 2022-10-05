import React from 'react';
import '../sass/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="menu">
                    <div>© 2022 Airbnb, Inc.</div>
                    <ul>
                        <li>개인정보 처리방침</li>
                    </ul>
                </div>
                <div>
                    웹사이트 제공자
                </div>
            </div>
        </footer>
    )
}

export default Footer;