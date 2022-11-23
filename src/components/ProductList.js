import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import{ storeProducts } from "../data.js";

export default class ProductList extends Component {
  state={
    products: storeProducts,
  }
  render() {
    console.log(this.state.products)
    return (
      <>
      <div className="py-5">
        <Title name="our" title="products"/>
      </div>
      <div className="container">
        <div className="row">

        </div>
      </div>
      </>
    )
  }
}
