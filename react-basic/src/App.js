import ExpenseItems from "./components/expense/ExpenseItem";
function App() {
  const obj = [
    {
      id: 1,
      LocationOfExpenditure: "basic needs",
      title: "Food",
      amount: 10,
    },
    {
      id: 2,
      LocationOfExpenditure: "essential needs",
      title: "Food",
      amount: 10,
    },
    {
      id: 3,
      LocationOfExpenditure: "not essential needs",
      title: "Food",
      amount: 10,
    },
    { id: 4, LocationOfExpenditure: " needs", title: "Food", amount: 10 },
    { id: 5, LocationOfExpenditure: "no needs", title: "Food", amount: 10 },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
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
