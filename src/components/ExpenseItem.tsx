/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpensesItem(props: any) {
  console.log(props);
  const { expenseDate, expenseTitle, expenseAmount } = props;
  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;
