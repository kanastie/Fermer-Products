import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import FeatureCard from "./feature-card";
import styled from "styled-components";
import { AppRoute } from "../../app/app";

const StyledSection = styled.section`
  padding: 0 90px;
  position: relative;
  z-index: 100;
  margin-top: -70px;
  background-color: white;

  .features__title {
    padding-top: 100px;
    margin: 0 auto 64px auto;
    width: 714px;
  }
`;

const StyledButton = styled(Button)`
  margin: 0 auto 100px auto;
  display: block;
  width: 260px;
`;

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  margin: 0 0 64px 0;
`;

const StyleItem = styled.li`
  list-style: none;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
  padding: 20px;
`;

function FeaturesList({ features }) {
  return Array.isArray(features) ? (
    <StyledSection>
      <>
        <Title as="h2" className="features__title">
          Почему фермерские продукты лучше?
        </Title>
        <StyledList>
          {features.map((feature) => (
            <StyleItem key={feature.id} isNegative={feature.isNegative}>
              <FeatureCard feature={feature} />
            </StyleItem>
          ))}
        </StyledList>
        <StyledButton link={AppRoute.ORDER}>Купить</StyledButton>
      </>
    </StyledSection>
  ) : null;
}

export default FeaturesList;
