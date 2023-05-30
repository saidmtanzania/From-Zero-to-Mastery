import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
function AddUSer(props: any) {
  const [state, setState] = useState({
    username: "",
    age: "",
  });
  const addUserHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username ">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUSer;
