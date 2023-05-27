import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props: any) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense: any) => (
        <ExpenseItem
          key={expense.id}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
