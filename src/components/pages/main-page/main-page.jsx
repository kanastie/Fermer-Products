import React from "react";
import Hero from "../../blocks/hero/hero";
import FeaturesList from "../../blocks/features/features-list";

function MainPage({ features }) {
  return (
    <>
      <Hero />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
