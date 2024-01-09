import React, { useState } from "react";
import Form from "./form/form";
import "./SellerInterface.css";

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
    if (!ProductId || !SellingPrice || !ProductName) {
      alert("Please fill  all the fields");
      return;
    }

    props.AddON(ProductId, SellingPrice, ProductName);
    SetProductId("");
    SetSellingPrice("");
    SetProductName("");
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler} className="formbody">
        <Form
          label="Product ID"
          id="Product_Id"
          type="number"
          value={ProductId}
          placeholder="Enter The Product ID"
          onChange={ProductIdHandler}
        ></Form>
        <Form
          label="Selling Price"
          id="Selling_Price"
          type="number"
          placeholder="Enter The Selling Price"
          value={SellingPrice}
          onChange={SellingPriceHandler}
        ></Form>
        <Form
          label="Product Name"
          id="Product_Name"
          type="text"
          placeholder="Enter The Product Name"
          value={ProductName}
          onChange={ProductNameHandler}
        ></Form>
        <button type="submit">Add Products</button>
      </form>
    </React.Fragment>
  );
};

export default SellerInterface;
