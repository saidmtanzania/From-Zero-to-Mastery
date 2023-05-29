/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

function CourseInput(props: any) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, checkValid] = useState(true);

  const goalInputChangeHandler = (event: any) => {
    if (event.target.value.trim().length > 0) checkValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      checkValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
