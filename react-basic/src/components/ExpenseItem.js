import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate />
      <ExpenseDetails
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
        title={props.title}
      />
    </div>
  );
}

export default ExpenseItems;
