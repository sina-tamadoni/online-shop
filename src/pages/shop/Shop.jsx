import React from "react";
import Slider from "../../components/Slider";
import Categories from "../../components/Categories";
import Products from "../../components/Products";

function Shop() {
  return (
    <React.Fragment>
      <Slider />
      <Categories />
      <Products />
    </React.Fragment>
  );
}

export default Shop;
