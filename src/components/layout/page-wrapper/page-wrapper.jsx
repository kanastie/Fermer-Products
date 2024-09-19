import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: ${(props) => props.theme.colorForBuyPageBG};
`;

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
