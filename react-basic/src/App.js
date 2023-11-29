import React from "react";

import NewExpenseForm from "./components/expense/NewExpense/NewExpenseForm";
import ExpenseItems from "./components/expense/ExpenseItem";
function App() {
  const obj = [
    {
      id: 1,
      LocationOfExpenditure: "basic needs",
      title: "Food",
      amount: 1,
    },
    {
      id: 2,
      LocationOfExpenditure: "essential needs",
      title: "Food",
      amount: 12,
    },
    {
      id: 3,
      LocationOfExpenditure: "not essential needs",
      title: "Food",
      amount: 13,
    },
    { id: 4, LocationOfExpenditure: " needs", title: "Food", amount: 14 },
    { id: 5, LocationOfExpenditure: "no needs", title: "Food", amount: 15 },
  ];
  const ExpenseFromNewExpenseForm = (expense) => {
    console.log(expense);
    console.log("this is the expense form the list of app js");
  };
  return (
    <div>
      <NewExpenseForm onAddExpense={ExpenseFromNewExpenseForm} />
      {obj.map((expense) => {
        return (
          <ExpenseItems
            key={expense.id}
            LocationOfExpenditure={expense.LocationOfExpenditure}
            amount={expense.amount}
            title={expense.title}
          />
        );
      })}
    </div>
  );
}

export default App;
