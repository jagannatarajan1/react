import ExpenseItems from "./components/ExpenseItem";
function App() {
  const obj = [
    { LocationOfExpenditure: "basic needs", title: "Food", amount: 10 },
    { LocationOfExpenditure: "essential needs", title: "Food", amount: 10 },
    { LocationOfExpenditure: "not essential needs", title: "Food", amount: 10 },
    { LocationOfExpenditure: " needs", title: "Food", amount: 10 },
    { LocationOfExpenditure: "no needs", title: "Food", amount: 10 },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems
        LocationOfExpenditure={obj[0].LocationOfExpenditure}
        amount={obj[0].amount}
        title={obj[0].title}
      ></ExpenseItems>
      <ExpenseItems
        LocationOfExpenditure={obj[1].LocationOfExpenditure}
        amount={obj[0].amount}
        title={obj[0].title}
      ></ExpenseItems>
      <ExpenseItems
        LocationOfExpenditure={obj[2].LocationOfExpenditure}
        amount={obj[0].amount}
        title={obj[0].title}
      ></ExpenseItems>
      <ExpenseItems
        LocationOfExpenditure={obj[3].LocationOfExpenditure}
        amount={obj[0].amount}
        title={obj[0].title}
      ></ExpenseItems>
      <ExpenseItems
        LocationOfExpenditure={obj[4].LocationOfExpenditure}
        amount={obj[0].amount}
        title={obj[0].title}
      ></ExpenseItems>
    </div>
  );
}

export default App;
