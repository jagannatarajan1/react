import React, { useState } from "react";
import Form from "./form/form";

const SellerInterface = (props) => {
  const [ProductId, SetProductId] = useState("");
  const [SellingPrice, SetSellingPrice] = useState("");
  const [ProductName, SetProductName] = useState("");

  const ProductIdHandler = (event) => {
    SetProductId(event.target.value);
  };

  const SellingPriceHandler = (event) => {
    SetSellingPrice(event.target.value);
  };

  const ProductNameHandler = (event) => {
    SetProductName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.AddON(ProductId, SellingPrice, ProductName);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Form
          label="Product ID"
          id="Product_Id"
          type="number"
          value={ProductId}
          onChange={ProductIdHandler}
        ></Form>
        <Form
          label="Selling Price"
          id="Selling_Price"
          type="number"
          value={SellingPrice}
          onChange={SellingPriceHandler}
        ></Form>
        <Form
          label="Product Name"
          id="Product_Name"
          type="text"
          value={ProductName}
          onChange={ProductNameHandler}
        ></Form>
        <button type="submit">Add Products</button>
      </form>
    </React.Fragment>
  );
};

export default SellerInterface;
