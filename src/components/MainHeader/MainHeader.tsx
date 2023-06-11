/* eslint-disable @typescript-eslint/no-explicit-any */
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props: any) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
