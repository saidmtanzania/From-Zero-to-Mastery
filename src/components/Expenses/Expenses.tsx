/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

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
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
