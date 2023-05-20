/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ExpenseItem.css";
function ExpensesItem(props:any) {
  console.log(props);
  const { expenseDate, expenseTitle, expenseAmount } = props;
  return (
    <div className="expense-item">
      <div>{expenseDate.toUTCString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;
