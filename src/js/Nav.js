import React from 'react';
import '../sass/Nav.scss';

const Nav = () => {
    return (
        <div className="container">
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


                    <div className="profile_btn">
                        <p>호스트 되기</p>
                        <i class="bi bi-globe"></i>
                        <div>
                            <i class="bi bi-list"></i>
                            <i class="bi bi-person-circle"></i>
                        </div>
                    </div>
                </nav>
                <nav className="small-nav">
                    <div className="box">
                        <div className="left-box">
                            <i class="bi bi-search"></i>
                            <div>
                                <p>어디로 여행가세요?</p>
                                <p>어디든지<span>・ 언제든 일주일</span> ・ 게스트 추가</p>
                            </div>
                        </div>
                        <div className="right-circle">
                            <i class="bi bi-sliders"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav;