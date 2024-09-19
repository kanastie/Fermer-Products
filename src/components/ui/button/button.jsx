import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.ButtonColor};
  padding: 16px 97px;
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: 27px;
  display: block;
  min-height: 60px;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  text-decoration: none;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.ButtonColorHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

function Button({ props, link, onClick, children, className, maxWidth }) {
  return (
    <StyledButton
      {...props}
      $maxWidth={maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
