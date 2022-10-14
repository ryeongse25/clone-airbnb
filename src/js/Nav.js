import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import '../sass/Nav.scss';

const Nav = () => {
    const btn = useRef();
    useEffect(() => {
        let profile_btn = document.querySelector("header .profile_btn");
        let logo = document.querySelector("header .logos");

        logo.style.width = profile_btn.clientWidth + "px";

        document.addEventListener("click", function(e) {
            if ( btn.current.contains(e.target) ) return false;
            let dropdown = document.querySelector(".dropdown");
            dropdown.classList.add("d-none");
        })
    })

    function showDropdown() {
        let dropdown = document.querySelector(".dropdown");
        dropdown.classList.toggle("d-none");
    }


    return (
        <div className="container">
            <header>
                <nav className="nav">
                        <div className="logos">
                            <Link to="/">
                                <img src="./img/logo.png"/>
                                <img src="./img/t_logo.png"/>
                            </Link>
                        </div>

                    <div className="buttons">
                        <button>어디든지</button>
                        <span>|</span>
                        <button>언제든 일주일</button>
                        <span>|</span>
                        <button className="guest_btn">게스트 추가</button>
                        <div><i className="bi bi-search"></i></div>
                    </div>


                    <div style={{position: "relative"}}>
                        <div className="profile_btn">
                            <p>호스트 되기</p>
                            <div className="globe"><i className="bi bi-globe"></i></div>
                            <div className="btn" onClick={showDropdown} ref={btn}>
                                <i className="bi bi-list"></i>
                                <i className="bi bi-person-circle"></i>
                            </div>
                        </div>
                        <div className="dropdown d-none">
                            <p>회원 가입</p>
                            <p>로그인</p>
                            <hr />
                            <p>숙소 호스트 되기</p>
                            <p>체험 호스팅하기</p>
                            <p>도움말</p>
                        </div>
                    </div>
                </nav>
                <nav className="middle-nav nav">
                    <div className="flex">
                        <div className="logos">
                            <Link to="/">
                                <img src="./img/logo.png"/>
                                <img src="./img/t_logo.png"/>
                            </Link>
                        </div>

                        <div className="buttons">
                            <button>어디든지</button>
                            <span>|</span>
                            <button>언제든 일주일</button>
                            <span>|</span>
                            <button className="guest_btn">게스트 추가</button>
                            <div><i className="bi bi-search"></i></div>
                        </div>
                    </div>

                    <div className="profile_btn">
                        <p>호스트 되기</p>
                        <div className="globe"><i className="bi bi-globe"></i></div>
                        <div className="btn">
                            <i className="bi bi-list"></i>
                            <i className="bi bi-person-circle"></i>
                        </div>
                    </div>
                </nav>
                <nav className="small-nav">
                    <div className="box">
                        <div className="left-box">
                            <i className="bi bi-search"></i>
                            <div>
                                <p>어디로 여행가세요?</p>
                                <p>어디든지<span>・ 언제든 일주일</span> ・ 게스트 추가</p>
                            </div>
                        </div>
                        <div className="right-circle">
                            <i className="bi bi-sliders"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Nav;