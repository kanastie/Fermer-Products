import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import styled from "styled-components";
import Tick from "../../../assets/checked.svg";

const Checkbox = styled.section`
  background-color: ${(props) => props.theme.colorWhite};
  padding: 24px 0 12px 0;
  margin-bottom: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
`;

const Form = styled.form``;

const StyledTitle = styled(Title)`
  padding-left: 20px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const StyledMark = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #fc9b27;
  border: 1px solid rgba(0, 0, 0, 0.1);
  top: 25%;
  right: 20px;
`;

const Item = styled.li`
  list-style: none;
  padding: 15px 50px 14px 20px;
  position: relative;

  // .control-input[type="checkbox"]:checked + .control-mark::after {
  //   content: "+";
  //   width: 16px;
  //   height: 16px;
    // background-image: url(Tick);
    // background-repeat: no-repeat;
  }
`;

function Filter() {
  return (
    <Checkbox>
      <Form action method="get">
        <StyledList>
          <StyledTitle
            size={TitleSize.EXTRA_SMALL}
            as="h3"
            className="filter__title"
          >
            Выберите продукты
          </StyledTitle>
          <Item>
            <label for="chicken-thigh-fillet">
              <input
                type="checkbox"
                name="chicken-thigh-fillet"
                id="chicken-thigh-fillet"
                checked
                className="visually-hidden control-input"
              />
              <span>Филе бедра цыпленка</span>
              <StyledMark className="control-mark" />
            </label>
          </Item>
          <Item>
            <label for="goose-thigh-fillet">
              <input
                type="checkbox"
                name="goose-thigh-fillet"
                id="goose-thigh-fillet"
                checked
                className="control-input"
              />
              <span>Филе бедра гуся</span>
              <StyledMark />
            </label>
          </Item>
          <Item>
            <label for="beef-thigh-flesh">
              <span>Мякоть бедра говяжья</span>
              <StyledMark />
              <input
                type="checkbox"
                name="beef-thigh-flesh"
                id="beef-thigh-flesh"
                checked
              />
            </label>
          </Item>
          <Item>
            <label for="chicken-breast-bone">
              <span>Грудка цыпленка на кости</span>
              <StyledMark />
              <input
                type="checkbox"
                name="chicken-breast-bone"
                id="chicken-breast-bone"
              />
            </label>
          </Item>
          <Item>
            <label for="chicken-drumstick">
              <span>Голень цыпленка</span>
              <StyledMark />
              <input
                type="checkbox"
                name="chicken-drumstick"
                id="chicken-drumstick"
              />
            </label>
          </Item>
        </StyledList>
      </Form>
    </Checkbox>
  );
}

export default Filter;
