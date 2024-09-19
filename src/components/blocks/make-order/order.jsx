import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.colorWhite};
  padding: 24px 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.04),
    0px 2px 6px 0px rgba(0, 0, 0, 0.04), 0px 10px 20px 0px rgba(0, 0, 0, 0.04);

  .price__text {
    display: block;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 8px;
  }

  .price__number {
    display: block;
    font-size: 24px;
    line-height: 31px;
    font-weight: 700;
    margin-bottom: 32px;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0 0 24px 0;
`;

const StyledLabel = styled.label`
  display: flex;
`;

const StyledInput = styled.input`
  padding: 14px 12px 13px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 0 20px 0;
  flex-grow: 1;
  font-size: 14px;
  line-height: 21px;
`;

function Order() {
  // должны выбираться продукты, считаться их цена, выводиться в алёрте общая стоимость и адрес доставки
  const HadleBuy = () => {
    alert(`Спасибо за покупку! `);
  };

  return (
    <Wrapper>
      <form action method="get">
        <StyledTitle
          size={TitleSize.EXTRA_SMALL}
          as="h3"
          className="filter__title"
        >
          Сделать заказ
        </StyledTitle>
        <StyledLabel>
          <StyledInput
            type="text"
            name="delivery"
            placeholder="Введите адрес доставки"
          />
        </StyledLabel>
        <span className="price__text">Цена</span>
        <span className="price__number">
          <b>1 200 руб.</b>
        </span>
        <Button maxWidth onClick={HadleBuy}>
          Купить
        </Button>
      </form>
    </Wrapper>
  );
}

export default Order;
