import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import styled from "styled-components";
import ProductCard from "./product-item";

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  width: 727px;
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  margin-bottom: 12px;

  :last-child {
    margin-bottom: 0;
  }
`;

function Products({ products }) {
  return Array.isArray(products) ? (
    <>
      <StyledList>
        <Title as="h3" className="features__title visually-hidden">
          Список продуктов
        </Title>
        {products.map((product) => (
          <Item key={product.id}>
            <ProductCard product={product} />
          </Item>
        ))}
      </StyledList>
    </>
  ) : null;
}
export default Products;
