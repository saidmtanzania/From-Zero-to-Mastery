import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

/* eslint-disable @typescript-eslint/no-explicit-any */
function AddUSer(props: any) {
  const [dataInvalid, setDataInvalid] = useState(false);
  const [state, setState] = useState({
    username: "",
    age: "",
  });

  const userInputHandler = (event: any) => {
    const { id, value } = event.target;

    setState((preVal: any) => {
      if (id === "username") {
        return {
          ...preVal,
          username: value,
        };
      } else if (id === "age") {
        return {
          ...preVal,
          age: value,
        };
      }
    });
  };

  const addUserHandler = (event: any) => {
    event.preventDefault();

    if (state.username.trim().length === 0 || state.age.trim().length === 0) {
      return setDataInvalid(true);
    }
    if (+state.age < 1) {
      return setDataInvalid(true);
    }

    props.onAddUser(state.username.trim(), state.age);

    setState({
      username: "",
      age: "",
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username ">Username</label>
        <input
          type="text"
          id="username"
          value={state.username}
          onChange={userInputHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          value={state.age}
          onChange={userInputHandler}
        />
        <Button type="submit">Add User</Button>
        {dataInvalid && (
          <ErrorModal message="Invalid data. Please try again." />
        )}
      </form>
    </Card>
  );
}

export default AddUSer;
