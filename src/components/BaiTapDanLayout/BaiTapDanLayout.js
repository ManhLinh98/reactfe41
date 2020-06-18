import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTSlider from "./BTSlider";
import ProductsList from "./ProductsList";
import Footer from "./Footer";

export default class BaiTapDanLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <BTSlider />
        <ProductsList/>
        <Footer/>
      </div>
    );
  }
}
