import React from "react";
import logo from "../../../assets/logo.svg";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../app/app";

const LogoStyle = css`
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const StyledLogo = styled(Link)`
  ${LogoStyle}
  text-decoration: none;
`;

const StyledLogoMainPage = styled.span`
  ${LogoStyle}
`;

const StyledLogoImg = styled.img`
  margin-right: 24px;
`;

const StyledLogoText = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  color: #333333;
`;

function Logo() {
  const { pathName } = useLocation();
  return pathName === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <StyledLogoImg src={logo} width={44} height={44} alt="Логотип" />
      <StyledLogoText>Фермерские продукты</StyledLogoText>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <StyledLogoImg src={logo} width={44} height={44} alt="Логотип" />
      <StyledLogoText>Фермерские продукты</StyledLogoText>
    </StyledLogo>
  );
}

export default Logo;
