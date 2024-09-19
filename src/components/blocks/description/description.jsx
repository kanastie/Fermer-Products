import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin: 0 0 14px 0;
  padding-top: 16px;
`;

const StyledSpan = styled.span`
  background-color: rgba(216, 236, 254, 1);
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  padding: 4px 8px;
`;

function Description({ text, price, weight }) {
  return (
    <>
      <StyledText>{text}</StyledText>
      <StyledSpan>
        {price} руб. / {weight} гр.
      </StyledSpan>
    </>
  );
}

export default Description;
