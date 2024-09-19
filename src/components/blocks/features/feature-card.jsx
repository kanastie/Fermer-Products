import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  gap: 20px;

  .features__img {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .features__description {
    grid-column: 1 / -1;
    margin: 0;
  }
`;

const Owner = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colorWhite};
  width: 158px;
  display: inline-block;
  padding: 0 10px;

  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForFeatureIconBad
      : props.theme.colorForFeatureIconGood};
`;

function FeatureCard({ feature }) {
  return (
    <StyledWrapper>
      <img
        className="features__img"
        width={56}
        height={56}
        src={feature.image}
        alt={feature.title}
      />
      <div>
        <Owner isNegative={feature.isNegative}>{feature.owner}</Owner>
        <Title size={TitleSize.EXTRA_SMALL} as="h3">
          {feature.title}
        </Title>
      </div>
      <p
        className="features__description"
        dangerouslySetInnerHTML={{ __html: feature.text }}
      />
    </StyledWrapper>
  );
}

export default FeatureCard;
