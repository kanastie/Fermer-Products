import React from "react";
import Sidebar from "../../blocks/sidebar/sidebar";
import Products from "../../blocks/products-list/products-list";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 40px 90px;
  display: flex;
  gap: 20px;
`;

function BuyPage({ products }) {
  return (
    <PageWrapper>
      <Sidebar />
      <Products products={products} />
    </PageWrapper>
  );
}

export default BuyPage;
