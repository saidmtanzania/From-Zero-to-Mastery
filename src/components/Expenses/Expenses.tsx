/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props: any) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((item: any) => (
        <ExpenseItem
          key={item.id}
          expenseDate={item.date}
          expenseTitle={item.title}
          expenseAmount={item.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
