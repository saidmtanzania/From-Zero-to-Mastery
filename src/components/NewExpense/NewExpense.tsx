/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props: any) {
  const [isEditing, setIsEditing] = useState(false);

  const onDataSaveHandler = (enteredData: any) => {
    const expenseData: any = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.addedExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onDataSave={onDataSaveHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
