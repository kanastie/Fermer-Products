import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";
import products from "../../mocks/products";
import { GlobalStyle } from "./style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollToTop from "../ui/scroll-top/scroll-top";

export const AppRoute = {
  MAIN: "/",
  ORDER: "/order",
};

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
