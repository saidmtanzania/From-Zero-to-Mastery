/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props: any) {
  const [state, setState] = useState({
    title: "",
    amount: "",
    date: "",
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
          title: value,
        };
      } else if (id === "amount") {
        return {
          ...preVal,
          amount: value,
        };
      } else if (id === "date") {
        return {
          ...preVal,
          date: value,
        };
      }
    });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (state.title === "" || state.amount === "" || state.date === "") {
      return false;
    }
    const expenseData: any = state;
    props.onDataSave(expenseData);
    setState({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={state.title}
            onChange={stateChangeHandler}
            required
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min={min}
            step={step}
            value={state.amount}
            onChange={stateChangeHandler}
            required
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min={minDate}
            max={maxDate}
            value={state.date}
            onChange={stateChangeHandler}
            required
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
