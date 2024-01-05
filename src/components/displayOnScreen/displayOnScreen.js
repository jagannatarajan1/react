import React, { useState, useEffect } from "react";

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

  const handleDelete = (productId) => {
    // Filter out the deleted product and update the total price
    props.onDelete(productId);
  };

  return (
    <React.Fragment>
      <ul>
        <h3>Products</h3>
        {props.products.map((product) => (
          <li key={product.ProductId}>
            {product.ProductPrice} - {product.ProductName}
            <button onClick={() => handleDelete(product.ProductId)}>
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
