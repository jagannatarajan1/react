import ExpenseItems from "./components/ExpenseItem";
function App() {
  const obj = [
    { LocationOfExpenditure: "basic needs" },
    { LocationOfExpenditure: "essential needs" },
    { LocationOfExpenditure: "not essential needs" },
    { LocationOfExpenditure: " needs" },
    { LocationOfExpenditure: "no needs" },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems
        LocationOfExpenditure={obj[0].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        LocationOfExpenditure={obj[1].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        LocationOfExpenditure={obj[2].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        LocationOfExpenditure={obj[3].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        LocationOfExpenditure={obj[4].LocationOfExpenditure}
      ></ExpenseItems>
    </div>
  );
}

export default App;
