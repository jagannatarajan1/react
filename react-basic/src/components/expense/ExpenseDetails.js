import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((obj) => (
          <ExpenseItems
            title={obj.title}
            amount={obj.amount}
            date={obj.date}
          ></ExpenseItems>
        ))}
      </Card>
    </div>
  );
};
export default ExpenseDetails;
