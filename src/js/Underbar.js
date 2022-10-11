import React from 'react';
import '../sass/Underbar.scss';

const Underbar = () => {
    function hideUnderbar() {
        let underbar = document.querySelector(".underbar");
        underbar.classList.add("d-none");
    }
    return (
        <div className="underbar d-none">
            <div className="close_btn" onClick={hideUnderbar}>✕</div>
            <div className="container">
                <div className="section">
                    <div className="title fist-title">에어비앤비 지원</div>
                    <div className="list">
                        <p>도움말 센터</p>
                        <p>에어커버</p>
                        <p>안전 정보</p>
                        <p>장애인 지원</p>
                        <p>예약 취소 옵션</p>
                        <p>에어비앤비의 코로나19 대응 방안</p>
                        <p>이웃 민원 신고</p>
                    </div>
                </div>
                <div className="section">
                    <div className="title">커뮤니티</div>
                    <div className="list">
                        <p>Airbnb.org: 재난 구호 숙소</p>
                        <p>아프간 난민 지원</p>
                        <p>차별 철폐를 위한 노력</p>
                    </div>
                </div>
                <div className="section">
                    <div className="title">호스팅</div>
                    <div className="list">
                        <p>호스팅 시작하기</p>
                        <p>호스팅 자료 둘러보기</p>
                        <p>커뮤니티 포럼 방문하기</p>
                        <p>책임감 있는 호스팅</p>
                    </div>
                </div>
                <div className="section">
                    <div className="title">에어비앤비</div>
                    <div className="list">
                        <p>뉴스룸</p>
                        <p>새로운 기능에 대해 알아보기</p>
                        <p>에어비앤비 공동창업자의 메시지</p>
                        <p>채용정보</p>
                        <p>투자자 정보</p>
                    </div>
                </div>
                <div className="detail">
                    <p>회사 상세정보</p>
                    <p>웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Underbar;