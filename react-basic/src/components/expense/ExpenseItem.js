import ExpenseDate from "../expense/ExpenseDate";
import "../ExpenseItems.css";
import ExpenseDetails from "../expense/ExpenseDetails";
const ExpenseItems = (props) => {
  const clickHandler = () => {
    console.log("deleted");
  };
  return (
    <div className="expense-item">
      <ExpenseDate />
      <ExpenseDetails
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
        title={props.title}
      />
      <button onClick={clickHandler}>Delete</button>
    </div>
  );
};

export default ExpenseItems;
