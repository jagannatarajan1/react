import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isediting, Setediting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const Opentheform = () => {
    Setediting(true);
  };
  const CancelForm = () => {
    Setediting(false);
  };

  return (
    <div className="new-expense">
      {!isediting && <button onClick={Opentheform}>Add Expense</button>}
      {isediting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          OnCancel={CancelForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
