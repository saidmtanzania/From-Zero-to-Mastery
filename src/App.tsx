import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    <>
      <h1>Lets Get started</h1>
      <ExpenseItem
        expenseDate={new Date(2023, 3, 25)}
        expenseTitle={"Playful Joy"}
        expenseAmount={450000}
      />
      <ExpenseItem
        expenseDate={new Date(2023, 6, 3)}
        expenseTitle={"Boom SMS"}
        expenseAmount={505750}
      />
    </>
  );
}

export default App;
