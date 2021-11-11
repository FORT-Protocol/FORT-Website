import React from 'react';
import logo from '../assets/images/logo.svg';
import styled, {keyframes} from "styled-components";
import bg from '../assets/images/bg.jpg';
import fort from '../assets/images/fort.svg';
import ball1 from '../assets/images/ball1.png';

const AppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeaderFrame = styled.div`
  position: absolute;
  width: 100%;
  z-index: 9;
  display: flex;
  padding: 30px 0;
  align-item: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    position: static;
  }
`

const Logo = styled.img`
  margin: 0 44px;
`

const DashboardButton = styled.button`
  height: 34px;
  width: 170px;
  margin-right: 44px;
  border: 2px;
  border-style:solid;
  border-radius: 22px;
  background-color: transparent;
  color: #fff;
  font-family: MontserratBold;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  cursor:pointer;
`

const ContentFrame = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BallsFrame = styled.div`
  height: 100%;
  width: 100%;
  
  position: absolute;
  z-index: 5;
`

const Ball1Frame = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const myRotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg)
  }
`

const inverseRotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg)
  }
`

const Ball1 = styled.img`
  height: 90%;
  animation:${myRotate} 60s linear infinite;
`

const AppButton = styled.button`
  height: 34px;
  width: 146px;
  border: 2px;
  border-style:solid;
  border-radius: 22px;
  background-color: transparent;
  color: #fff;
  font-family: MontserratBold;
  text-align: center;
  font-size: 16px;
  cursor:pointer;
`

const FormulaImage = styled.img`
  width: 530px;
  height: 70px;
  margin-bottom: 30px;
`

function App() {
  return (
    <AppFrame>
      <BallsFrame>
        <Ball1Frame>
          <Ball1 src={ball1} alt={"ball1"}/>
        </Ball1Frame>
      </BallsFrame>
      <HeaderFrame>
        <Logo src={logo} alt="logo"/>
        <DashboardButton onClick={() => {
          const w = window.open('about:blank');
          // @ts-ignore
          w.location.href = 'https://dashboard.hedge.red';
        }}>
          Dashboard
        </DashboardButton>
      </HeaderFrame>
      <ContentFrame>
        <FormulaImage src={fort} alt="fort formula"/>
        <AppButton onClick={() => {
          const w = window.open('about:blank');
          // @ts-ignore
          w.location.href = 'https://app.hedge.red';
        }}>
          APP
        </AppButton>
      </ContentFrame>
    </AppFrame>
  );
}

export default App;
