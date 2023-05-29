/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from "./Button.module.css";

function Button(props: any) {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
