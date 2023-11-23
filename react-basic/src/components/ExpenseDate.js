function ExpenseDate(props) {
  const ExpenseDate = new Date();

  const month = ExpenseDate.toLocaleString("en-US", { month: "long" });
  const day = ExpenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = ExpenseDate.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}
export default ExpenseDate;
