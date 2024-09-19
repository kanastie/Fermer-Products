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

function Characteristic({ weight, shelfShow, breed, origin }) {
  return (
    <>
      <StyledList>
        <StyledItem>
          <b>Масса:</b> {weight}
        </StyledItem>
        <StyledItem>
          <b>Срок годности:</b> {shelfShow}
        </StyledItem>
        <StyledItem>
          <b>Порода:</b> {breed}
        </StyledItem>
        <StyledItem>
          <b>Место происхождения:</b> {origin}
        </StyledItem>
      </StyledList>
    </>
  );
}

export default Characteristic;
