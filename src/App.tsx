/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import AddUSer from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

interface User {
  key: string;
  name: string;
  age: number;
}
function App() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const key = Math.floor(Math.random() * 100).toString();

  const addUserHandler = (uName: string, uAge: number) => {
    setUsersList((prevUserList: User[]) => {
      return [...prevUserList, { key: key, name: uName.trim(), age: uAge }];
    });
  };

  return (
    <div>
      <AddUSer onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
