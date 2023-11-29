import React from "react";
import "./NewExpense.css";
import Expenseform from "./ExpenseForm";
const NewExpenseForm = (props) => {
  const ExpenseFormSubmitedData = (EnteredExpenseData) => {
    const ExpenseData = {
      ...EnteredExpenseData,
    };
    props.onAddExpense(ExpenseData);
  };
  return (
    <div className="new-expense">
      <Expenseform onSubmitedDate={ExpenseFormSubmitedData} />
    </div>
  );
};
export default NewExpenseForm;
