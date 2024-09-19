import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import styled from "styled-components";
import Tabs from "../tabs/tabs";
import Description from "../description/description";
import Characteristic from "../description/characteristic";
import NutritionFacts from "../description/nutrition-facts";

const Article = styled.article`
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  gap: 20px;

  .wrapper {
    flex-basis: 419px;
  }
`;

const StyledImg = styled.img`
  object-fit: cover;
  flex-basis: 248px;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 20px;
`;

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <Description
          text={product.description}
          price={product.price}
          weight={product.weight}
        />
      ),
    },
    {
      title: "Характеристики",
      content: (
        <Characteristic
          weight={product.characteristic.weight}
          shelfShow={product.characteristic.shelfShow}
          breed={product.characteristic.breed}
          origin={product.characteristic.origin}
        />
      ),
    },
    {
      title: "Свойства",
      content: (
        <NutritionFacts
          calories={product.nutritionFacts.calories}
          pfc={product.nutritionFacts.pfc}
        />
      ),
    },
  ];

  return (
    <>
      <Article>
        <StyledImg
          width={248}
          height={248}
          src={product.img}
          alt={product.name}
        />
        <div className="wrapper">
          <StyledTitle size={TitleSize.SMALL} as="h2">
            {product.name}
          </StyledTitle>
          <Tabs tabs={tabs} />
        </div>
      </Article>
    </>
  );
}
export default ProductCard;
