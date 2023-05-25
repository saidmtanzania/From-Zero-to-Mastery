/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Card.css";
function Card(props: any) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
