/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props: any) {
  const onDataSaveHandler = (enteredData: any) => {
    const expenseData: any = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.addedExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onDataSave={onDataSaveHandler} />
    </div>
  );
}

export default NewExpense;
