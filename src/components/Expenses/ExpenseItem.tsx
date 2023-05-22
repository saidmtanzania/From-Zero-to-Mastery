/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpensesItem(props: any) {
  const [Title, setTitle] = useState(props.expenseTitle);
  const { expenseDate, expenseAmount } = props;

  const clickHandler = () => {
    setTitle("Updated Here");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">{`Tsh: ${expenseAmount}`}</div>
      </div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
  );
}

export default ExpensesItem;
