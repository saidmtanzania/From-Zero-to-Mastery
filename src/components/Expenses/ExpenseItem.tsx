/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpensesItem(props: any) {
  const clickHandler = () => {
    console.log("Clicked!!!");
  };

  const { expenseDate, expenseTitle, expenseAmount } = props;
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title </button>
    </Card>
  );
}

export default ExpensesItem;
