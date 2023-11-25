import ExpenseDate from "../expense/ExpenseDate";
import "../ExpenseItems.css";
import ExpenseDetails from "../expense/ExpenseDetails";
const ExpenseItems = (props) => {
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
};

export default ExpenseItems;
