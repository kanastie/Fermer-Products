import React from "react";
import Logo from "../../ui/logo/logo";
import Copyrigth from "../../ui/copyrigth/copyrigth";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  margin: 0 auto;
  padding: 0 90px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;
  background-color: ${(props) => props.theme.colorWhite};
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo />
      <Copyrigth />
    </StyledFooter>
  );
}

export default Footer;
