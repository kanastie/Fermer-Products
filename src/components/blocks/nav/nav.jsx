import React from "react";
import Button from "../../ui/button/button";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const links = [
  {
    to: "/",
    button: <Button link={"/"}>Главная</Button>,
  },
  {
    to: "/order",
    button: <Button link={"/order"}>Купить</Button>,
  },
];

const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  padding: 10px 0 10px 0;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  list-style: none;
  margin: 0;
`;

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <StyledNav>
      <StyledUl>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <StyledLi key={link.to}>{link.button}</StyledLi>
          ))}
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;
