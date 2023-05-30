/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Card.module.css";

function Card(props: any) {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
