import React, { useState } from "react";
import "./ExpenseForm.css";
const Expenseform = (props) => {
  const [Expensetitle, setTitleEntite] = useState("");
  const ExpenseTitleHandler = (event) => {
    setTitleEntite(event.target.value);
  };
  const [ExpenseAmount, setAmountEntite] = useState("");
  const ExpenseAmountHandler = (event) => {
    setAmountEntite(event.target.value);
  };
  const [Date, DateEntite] = useState("");
  const DateHandler = (event) => {
    DateEntite(event.target.value);
  };
  const Buttonfunction = (event) => {
    event.preventDefault();
    let FormDataObjects = {
      Title: Expensetitle,
      Amount: ExpenseAmount,
      Date: Date,
    };
    props.onSubmitedDate(FormDataObjects);
    setTitleEntite("");
    setAmountEntite("");
    DateEntite("");
  };
  return (
    <form onSubmit={Buttonfunction}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            value={Expensetitle}
            onChange={ExpenseTitleHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input
            type="number"
            value={ExpenseAmount}
            onChange={ExpenseAmountHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={Date} onChange={DateHandler}></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default Expenseform;
