import React from 'react';
import '../sass/Nav.scss';

const Nav = () => {
    return (
        <header>
            <nav className="nav">

                <div className="logos">
                    <img src="./img/logo.png"/>
                    <img src="./img/t_logo.png"/>
                </div>

                <div className="buttons">
                    <button>어디든지</button>
                    <span>|</span>
                    <button>언제든 일주일</button>
                    <span>|</span>
                    <button className="guest_btn">게스트 추가</button>
                    <div><i class="bi bi-search"></i></div>
                </div>


                <div></div>
            </nav>
        </header>
    )
}

export default Nav;