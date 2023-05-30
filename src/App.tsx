/* eslint-disable @typescript-eslint/no-explicit-any */
import AddUSer from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  return (
    <div>
      <AddUSer />
      <UserList users={[]} />
    </div>
  );
}

export default App;
