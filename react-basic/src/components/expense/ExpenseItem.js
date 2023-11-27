import React, { useState } from "react";
import ExpenseDate from "../expense/ExpenseDate";
import "../ExpenseItems.css";
import ExpenseDetails from "./ExpenseDetails.js";
const ExpenseItems = (props) => {
  const [amount, setTitle] = useState(props.amount);
  const clickHandler = () => {
    setTitle(100);
    console.log(amount);
  };
  return (
    <div className="expense-item">
      <ExpenseDate />
      <ExpenseDetails
        amount={amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
        title={props.title}
      />
      <button onClick={clickHandler}>Amount</button>
    </div>
  );
};

export default ExpenseItems;
