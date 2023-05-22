/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [state, setState] = useState({
    Title: "",
    Amount: "",
    Date: "",
  });

  const min = 0.01;
  const step = 0.01;
  const minDate = "2022-01-01";
  const maxDate = "2023-12-31";

  const stateChangeHandler = (event: any) => {
    const { id, value } = event.target;

    setState((preVal: any) => {
      if (id === "title") {
        return {
          ...preVal,
          Title: value,
        };
      } else if (id === "amount") {
        return {
          ...preVal,
          Amount: value,
        };
      } else if (id === "date") {
        return {
          ...preVal,
          Date: value,
        };
      }
    });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    const expenseData: any = state;
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={stateChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min={min}
            step={step}
            onChange={stateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min={minDate}
            max={maxDate}
            onChange={stateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
