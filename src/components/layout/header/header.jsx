import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../blocks/nav/nav";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  margin: 0 auto;
  padding: 0 90px;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.04), 0 10px 20px 0 rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}

export default Header;
