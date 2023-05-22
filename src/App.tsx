import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
  return (
    <>
      <NewExpense />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
