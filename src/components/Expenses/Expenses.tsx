/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props: any) {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense: any) => {
    const date = new Date(expense.date);
    if (filteredYear === "All") {
      return expense;
    }
    return date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
