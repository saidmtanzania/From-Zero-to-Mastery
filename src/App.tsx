/* eslint-disable @typescript-eslint/no-explicit-any */
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const expensesData = [
  {
    id: "e1",
    title: "Playful Joy",
    amount: 450000,
    date: new Date(2023, 3, 25),
  },
  {
    id: "e2",
    title: "Boom SMS",
    amount: 505750,
    date: new Date(2023, 5, 4),
  },
  {
    id: "e3",
    title: "Bolt",
    amount: 250000,
    date: new Date(2023, 7, 3),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandler = (expense: any) => {
    setExpenses((prevExpenses: any) => [expense, ...prevExpenses]);
  };

  return (
    <>
      <NewExpense addedExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
