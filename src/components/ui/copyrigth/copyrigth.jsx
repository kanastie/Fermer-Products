import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCopyrigth = styled.p`
  margin: 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colorBlackForText};
  font-size: 14px;
  line-height: 21px;

  &:hover,
  &:active {
    color: rgba(51, 51, 51, 0.3);
  }
`;

function Copyrigth() {
  return (
    <StyledDiv>
      <StyledCopyrigth>Создано 2021</StyledCopyrigth>
      <StyledCopyrigth>
        <StyledLink href="https://esh-derevenskoe.ru/" target="_blank">
          Продукты и их характеристики
        </StyledLink>
      </StyledCopyrigth>
    </StyledDiv>
  );
}

export default Copyrigth;
