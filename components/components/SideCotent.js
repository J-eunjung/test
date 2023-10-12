import React from "react";
import styled, { css } from "styled-components";

const Sidecontainer = styled.div`
  width: 320px;
  background-color: #f3f3f3;
  height: 100%;
  float: right;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  ${(props) =>
    props.media &&
    css`
      @media (max-height: 700px) {
        display: none;
      }
    `}
`;
const RightSidebar = styled.div`
  margin: 40px 20px 20px 20px;
  width: 270px;
  height: 34vh;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.08);
  min-height: 310px;
`;
const DailyBox = styled.div`
  margin: 25px 0px 15px 25px;
  width: 220px;
  height: 30px;
  background-color: #fcccaf;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Graph = styled.div`
  width: 220px;
  height: 16vh;
  margin: 0px 0px 15px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160px;
  background-color: #fcfaaf;
`;
const DailyContainer = styled.div`
  width: 220px;
  height: 7vh;
  margin: 0px 0px 15px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  font-size: 15px;
  background-color: #fccccf;
`;

const Newscontens = styled.div`
  margin: 10px 20px 20px 20px;
  width: 270px;
  height: 25vh;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background-color: #ffffff;
`;

const Footer = styled.div`
  margin: 20px 0px 0px 0px;
  padding: 10px;
  width: 320px;
  height: 9vh;
  border-top: 2px solid #a3a3a3;
  min-height: 50px;
  p {
    font-size: 15px;
    margin: 15px;
  }
  #Footerjoname {
    ${(props) =>
      props.media &&
      css`
        @media (max-height: 900px) {
          display: none;
        }
      `}
  }
  ${(props) =>
    props.media &&
    css`
      @media (max-height: 700px) {
        display: none;
      }
    `}
`;

function SideContent() {
  return (
    <Sidecontainer>
      <RightSidebar>
        {/* 데일리 상태 박스 */}
        <DailyBox>
          <h2>HELLO! OOO</h2>
        </DailyBox>
        {/* 일일 목표랑 그래프 */}
        <Graph>
          <p>시각화</p>
        </Graph>
        {/* 일일 목표량 확인란 */}
        <DailyContainer>
          <div>
            <span>체중</span>
            <br />
            <span>___ kcal</span>
          </div>
          <div>
            <span>운동량</span>
            <br />
            <span>___ kcal</span>
          </div>
          <div>
            <span>식단</span>
            <br />
            <span>___ kcal</span>
          </div>
        </DailyContainer>
      </RightSidebar>
      {/* 추천 식단 / 건강뉴스 박스 */}
      <Newscontens></Newscontens>
      {/* 우측 사이드 바의 footer*/}
      <Footer media>
        <p>멀티 캠퍼스 2조</p>
        <p id="Footerjoname" media>
          이름들
        </p>
      </Footer>
    </Sidecontainer>
  );
}

export default SideContent;
