/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ExpenseDate.css";
function ExpenseDate(props: any) {
  if (!props.expenseDate) {
    return null;
  }
  const date = new Date(props.expenseDate);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
