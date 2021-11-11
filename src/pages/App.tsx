import React from 'react';
import logo from '../assets/images/logo.svg';
import styled from "styled-components";
import bg from '../assets/images/bg.jpg';

const AppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const HeaderFrame = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  align-item: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    position: static;
  }
`

const Logo = styled.img`
margin-left: 44px;
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

function App() {
  return (
    <AppFrame>
      <HeaderFrame>
        <Logo src={logo} alt="logo"/>
        <DashboardButton>
          Dashboard
        </DashboardButton>
      </HeaderFrame>

    </AppFrame>
  );
}

export default App;
