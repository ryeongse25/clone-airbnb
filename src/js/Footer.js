import React, {useEffect} from 'react';
import '../sass/Footer.scss';

const Footer = () => {
    useEffect(() => {
        let div = document.querySelector(".large-nav");
        let btn = document.querySelector(".btn");

        btn.style.bottom = div.clientHeight + 50 + "px";
        btn.style.left = (window.innerWidth - btn.clientWidth) / 2 + "px";

        window.addEventListener('resize', () => {
            btn.style.bottom = div.clientHeight + 50 + "px";
            btn.style.left = (window.innerWidth - btn.clientWidth) / 2 + "px";
        })
    }) 

    return (
        <footer>
            <div className="container">
                <div className="btn">
                    <span>지도 표시하기</span>
                    <i class="bi bi-map-fill"></i>
                </div>
                <div className="large-nav">
                    <div className="menu">
                        <div className="left-menu">
                            <span>© 2022 Airbnb, Inc.</span>
                            <span>・</span>
                            <span>개인정보 처리방침</span>
                            <span>・</span>
                            <span>이용약관</span>
                            <span>・</span>
                            <span>사이트맵</span>
                            <span>・</span>
                            <span>한국의 변경된 환불 정책</span>
                            <span>・</span>
                            <span>회사 세부정보</span>
                        </div>
                        <div className="right-menu">
                            <div>
                                <i class="bi bi-globe"></i>
                                <span>한국어 (KR)</span>
                            </div>
                            <div>
                                ₩ <span>KRW</span>
                            </div>
                            <div className="under-nav">
                                <span>지원 및 참고 자료</span>
                                <i class="bi bi-chevron-up"></i>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <p>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</p>
                    </div>
                </div>
                <div className="small-nav">
                    <div>
                        <i className="bi bi-search"></i>
                        <p>둘러보기</p>
                    </div>
                    <div>
                        <i className="bi bi-heart"></i>
                        <p>위시리스트</p>
                    </div>
                    <div>
                        <i className="bi bi-person-circle"></i>
                        <p>로그인</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;