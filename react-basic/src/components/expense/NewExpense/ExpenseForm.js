import React, { useState } from "react";
import "./ExpenseForm.css";
const Expenseform = () => {
  const [Expensetitle, setTitleEntite] = useState("");
  const ExpenseTitleHandler = (event) => {
    setTitleEntite(event.target.value);
    console.log(Expensetitle);
  };
  const [ExpenseAmount, setAmountEntite] = useState("");
  const ExpenseAmountHandler = (event) => {
    setAmountEntite(event.target.value);
    console.log(ExpenseAmount);
  };
  const [Date, DateEntite] = useState("");
  const DateHandler = (event) => {
    DateEntite(event.target.value);
    console.log(Date);
  };
  const Buttonfunction = (event) => {
    event.preventDefault();
    let FormDataObjects = {
      Title: Expensetitle,
      Amount: ExpenseAmount,
      Date: Date,
    };
    console.log(FormDataObjects);
  };
  return (
    <form onClick={Buttonfunction}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" onChange={ExpenseTitleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" onChange={ExpenseAmountHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={DateHandler}></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default Expenseform;
