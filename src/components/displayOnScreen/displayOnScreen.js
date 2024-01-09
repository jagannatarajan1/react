import React, { useState, useEffect } from "react";
import "./displayOnScreen.css";

const DisplayOnScreen = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price when props.products change
    const totalPrice = props.products.reduce(
      (sum, product) => sum + parseFloat(product.ProductPrice),
      0
    );
    setTotalPrice(totalPrice);
  }, [props.products]);

  const handleDelete = (ProductUniqueId) => {
    // Filter out the deleted product and update the total price
    console.log(props.products);
    props.onDelete(ProductUniqueId);
  };

  return (
    <React.Fragment>
      <ul className="listitems">
        <h3>Products</h3>
        {props.products.map((product) => (
          <li key={product.ProductUniqueId}>
            {product.ProductPrice} - {product.ProductName}
            <button onClick={() => handleDelete(product.ProductUniqueId)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Total price: {totalPrice}</h3>
      </ul>
    </React.Fragment>
  );
};

export default DisplayOnScreen;
