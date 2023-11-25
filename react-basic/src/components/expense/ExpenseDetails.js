const ExpenseDetails = (props) => {
  return (
    <div className="expense-item">
      <h2>{props.LocationOfExpenditure}</h2>
      <h2>{props.title}</h2>
      <div className="expense-item_price">${props.amount}</div>
    </div>
  );
};
export default ExpenseDetails;
