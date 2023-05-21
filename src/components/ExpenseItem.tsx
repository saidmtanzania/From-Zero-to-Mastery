/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
function ExpensesItem(props: any) {
  const { expenseDate, expenseTitle, expenseAmount } = props;
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;
