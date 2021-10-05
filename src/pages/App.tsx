import React from 'react';
import logo from '../assets/logo.svg';
import styled, {keyframes} from "styled-components";
import bg from '../assets/Wallpaper.jpg';
import cofix2 from '../assets/cofix-2.svg';
import cofix3 from '../assets/cofix-3.svg';
import cofix4 from '../assets/cofix-4.svg';
import cofix5 from '../assets/cofix-5.svg';
import cofix6 from '../assets/cofix-6.svg';
import cofix7 from '../assets/cofix-7.svg';
import cofix8 from '../assets/cofix-8.svg';
import cofix9 from '../assets/cofix-9.svg';
import fort1 from '../assets/fort-1.svg';

import {zoomIn} from 'react-animations';

const AppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeaderFrame = styled.div`
  position: fixed;
  z-index:11;
  width: 100%;
  height: 44px;
  @media (max-width: 600px) {
    position: static;
  }
`

const ImgFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  padding: 24px;
  @media (max-width: 600px) {
    justify-content: center; 
  }
`

const BodyFrame = styled.div`
  height: 100vh;
  display: grid;

  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas: ". . a . ."
                       ". b . c ."
                       "d . e . f"
                       ". g . h ."
                       ". . i . .";
`

const A = styled.div`
  grid-area: a;
  display: flex;
  justify-content: center;
  align-items: Center;
`

const B = styled.div`
  grid-area: b;
  display: flex;
  justify-content: center;
  align-items: Center;
`

const C = styled.div`
  grid-area: c;
  display: flex;
  justify-content: center;
  align-items: Center;
`

const D = styled.div`
  grid-area: d;
  display: flex;
  justify-content: center;
  align-items: Center;
`

const E = styled.div`
  grid-area: e;
  display: flex;
  justify-content: center;
  align-items: Center;
  flex-direction: column;
  padding-bottom:100px;
  @media (max-width: 600px) {
    padding-bottom:200px;
  }
`

const F = styled.div`
  grid-area: f;
  display: flex;
  justify-content: center;
  align-items: Center;
`

const G = styled.div`
  grid-area: g;
  display: flex;
  justify-content: center;
  align-items: Center;
`

const H = styled.div`
  grid-area: h;
  display: flex;
  justify-content: center;
  align-items: Center;
`

const I = styled.div`
  grid-area: i;
  display: flex;
  justify-content: center;
  align-items: Center;
`

const Button = styled.button`
    height: 100%;
    width: 100%;
    margin-top: 20px;
    border: 2px;
    border-style:solid;
    border-radius: 22px;
    background-color: transparent;
    color: #fff;
    font-family: MontserratBold;
    text-align: center;
    font-size: 14px;
    cursor:pointer;
`

const zoomInAnimation = keyframes`${zoomIn}`

const PulseDiv = styled.div`
  animation: 6s infinite alternate ${zoomInAnimation};
  animation-delay: 0s;
  -webkit-animation-delay: 0s; 
`

const PulseDiv1 = styled.div`
  animation: 6s infinite alternate ${zoomInAnimation};
  animation-delay: 2s;
  -webkit-animation-delay: 2s; 
`

const ButtonFrame = styled.div`
  height: 44px;
  width: 176px;
`

const Formula = styled.div`
  min-width: 400px;
  @media (max-width: 600px) {
     min-width: 340px;
  }
`

function App() {
  return (
    <AppFrame>
      <HeaderFrame>
        <ImgFrame>
          <img src={logo} alt="logo"/>
        </ImgFrame>
      </HeaderFrame>
      <BodyFrame>
        <A>
          <PulseDiv>
            <img src={cofix2} alt={"cofix2"} style={{ height: "100%", width: "100%" }}/>
          </PulseDiv>
        </A>
        <B>
          <PulseDiv1>
            <img src={cofix9} alt={"cofix9"} style={{ height: "100%", width: "100%" }}/>
          </PulseDiv1>
        </B>
        <C>
          <PulseDiv1>
            <img src={cofix3} alt={"cofix3"} style={{ height: "100%", width: "100%" }}/>
          </PulseDiv1>
        </C>
        <D>
          <PulseDiv>
            <img src={cofix8} alt={"cofix8"} style={{ height: "100%", width: "100%" }}/>
          </PulseDiv>
        </D>
        <E>
          <Formula>
            <img src={fort1} alt={"fort1"} style={{ height: "100%", width: "100%" }}/>
          </Formula>
          <ButtonFrame>
            <Button onClick={() => {
              window.location.href = 'https://app.hedge.red'
            }}
            >
              App
            </Button>
          </ButtonFrame>
        </E>
        <F>
          <PulseDiv>
            <img src={cofix4} alt={"cofix4"} style={{ height: "100%", width: "100%" }}/>
          </PulseDiv>
        </F>
        <G>
          <PulseDiv1>
            <img src={cofix7} alt={"cofix7"} style={{ height: "100%", width: "100%" }}/>
          </PulseDiv1>
        </G>
        <H>
          <PulseDiv1>
            <img src={cofix5} alt={"cofix5"} style={{ height: "100%", width: "100%" }}/>
          </PulseDiv1>
        </H>
        <I>
          <PulseDiv>
            <img src={cofix6} alt={"cofix6"} style={{ height: "100%", width: "100%" }}/>
          </PulseDiv>
        </I>
      </BodyFrame>
    </AppFrame>
  );
}

export default App;
