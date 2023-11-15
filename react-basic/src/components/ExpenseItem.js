import "./ExpenseItems.css";
function ExpenseItems() {
  const ExpenseDate = new Date();
  const Expense = "Food";
  const Expenseprice = 10;
  const LocationOfExpenditure = "Basic Needs";
  return (
    <div className="expense-item">
      <div>{ExpenseDate.toString()}</div>
      <div className="expense-items_description">
        <h2>{Expense}</h2>
      </div>
      <h2>{LocationOfExpenditure}</h2>
      <div className="expense-item_price">${Expenseprice}</div>
    </div>
  );
}

export default ExpenseItems;
