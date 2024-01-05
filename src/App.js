import React, { useState, useEffect } from "react";
import SellerInterface from "./components/SellerInterface";
import DisplayOnScreen from "./components/displayOnScreen/displayOnScreen";

function App() {
  const storedItems = JSON.parse(localStorage.getItem("items")) || [];
  const [items, setItems] = useState(storedItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const EcommerceHandler = (productKey, productPrice, productName) => {
    setItems((previousUserListProduct) => [
      ...previousUserListProduct,
      {
        ProductId: productKey,
        ProductPrice: productPrice,
        ProductName: productName,
      },
    ]);
  };

  const handleDelete = (productId) => {
    setItems((previousUserListProduct) => {
      const updatedItems = previousUserListProduct.filter(
        (item) => item.ProductId !== productId
      );

      // Remove from local storage as well
      localStorage.setItem("items", JSON.stringify(updatedItems));

      return updatedItems;
    });
  };

  return (
    <React.Fragment>
      <SellerInterface AddON={EcommerceHandler} />
      <DisplayOnScreen products={items} onDelete={handleDelete} />
    </React.Fragment>
  );
}

export default App;
