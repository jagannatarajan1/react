import React from "react";
import "./ExpenseForm.css";
const Expenseform = () => {
  const ExpenseTitleHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input type="text" onChange={ExpenseTitleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number"></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default Expenseform;
