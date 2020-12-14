import React from "react";
import styled from "styled-components";
import logoImg from "../images/logo.svg";
import loginImg from "../images/sign.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const ImgLogo = styled.img`
  width: 50px;
`;
const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;
const Login = styled.button`
  padding: 35px 0 0 0;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 19px;
  color: white;
  background: url(${loginImg}) 50% 0 no-repeat;
  cursor: pointer;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrBonald's</H1>
    </Logo>
    <Login>Войти</Login>
  </NavBarStyled>
);
