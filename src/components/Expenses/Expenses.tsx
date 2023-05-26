/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props: any) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense: any) => {
    const date = new Date(expense.date);
    return date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item: any) => (
      <ExpenseItem
        key={item.id}
        expenseDate={item.date}
        expenseTitle={item.title}
        expenseAmount={item.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
