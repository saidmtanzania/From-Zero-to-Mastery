/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

function UserList(props: any) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user: any) => (
          <li key={user.key}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UserList;
