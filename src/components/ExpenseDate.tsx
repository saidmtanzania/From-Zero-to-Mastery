/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ExpenseDate.css";
function ExpenseDate(props: any) {
  const day = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const month = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const year = props.expenseDate.getFullYear();
  return (
    <>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </>
  );
}

export default ExpenseDate;
