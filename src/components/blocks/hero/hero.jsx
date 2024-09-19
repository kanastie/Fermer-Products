import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import styled from "styled-components";
import heroImg from "../../../assets/hero-man.svg";

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.colorForHeroBG};
  padding: 0 90px 0 90px;
  display: flex;
  gap: 17px;

  .hero__title {
    padding-top: 183px;
    margin-bottom: 24px;
    width: 637px;
  }

  .a {
    position: relative;
  }
`;

const StyledWrapper = styled.div`
  &::before {
    width: 446px;
    height: 447px;
    border-radius: 50%;
    background-color: #c4e2ff;
    top: 76px;
    content: "";
    display: block;
    position: absolute;
  }
`;

const StyledParagraf = styled.p`
  margin: 0;
  width: 538px;
  padding-bottom: 183px;
  margin-right: 99px;
`;

const StyledImg = styled.img`
  padding: 37px 0 0 103px;
  position: relative;
`;

function Hero() {
  return (
    <StyledSection>
      <div>
        <Title size={TitleSize.BIG} as="h1" className="hero__title">
          Магазин фермерских продуктов с доставкой
        </Title>
        <StyledParagraf className="hero__text">
          Все продукты изготавливаются под заказ. Фермеры начинают&nbsp;готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledParagraf>
      </div>
      <div className="a">
        <StyledWrapper>
          <StyledImg
            src={heroImg}
            alt="Человек с фермерскими продуктами машет рукой"
            width={273}
            height={627}
          />
        </StyledWrapper>
      </div>
    </StyledSection>
  );
}

export default Hero;
