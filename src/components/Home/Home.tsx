/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props: any) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={props.onLogout}>Log Out</button>
    </Card>
  );
};

export default Home;
