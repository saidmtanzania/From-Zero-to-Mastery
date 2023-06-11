/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import AddUSer from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

interface User {
  key: string;
  name: string;
  age: string;
}
function App() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const key = Math.floor(Math.random() * 100).toString();

  const addUserHandler = (uName: string, uAge: string) => {
    setUsersList((prevUserList: User[]) => {
      return [...prevUserList, { key: key, name: uName.trim(), age: uAge }];
    });
  };

  return (
    <React.Fragment>
      <AddUSer onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
