/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props: any) {
  return (
    <Card className="expenses">
      <ExpenseItem
        expenseDate={props.items[0].date}
        expenseTitle={props.items[0].title}
        expenseAmount={props.items[0].amount}
      />
      <ExpenseItem
        expenseDate={props.items[1].date}
        expenseTitle={props.items[1].title}
        expenseAmount={props.items[1].amount}
      />
      <ExpenseItem
        expenseDate={props.items[2].date}
        expenseTitle={props.items[2].title}
        expenseAmount={props.items[2].amount}
      />
    </Card>
  );
}

export default Expenses;
