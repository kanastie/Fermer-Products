import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  padding-top: 20px;
`;

const StyledItem = styled.li`
  list-style: none;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 8px;

  :last-child {
    margin-bottom: 0;
  }
`;

function NutritionFacts({ calories, pfc }) {
  return (
    <StyledList>
      <StyledItem>
        <b>Энергетическая ценность:</b> {calories}
      </StyledItem>
      <StyledItem>
        <b>Пищевая ценнность:</b> {pfc}
      </StyledItem>
    </StyledList>
  );
}

export default NutritionFacts;
