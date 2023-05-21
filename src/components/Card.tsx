/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Card.css";
function Card(props: any) {
  const classes = "card " + props.className;
  // props.children is a special prop that every component receives automatically
  return <div className={classes}>{props.children}</div>;
}

export default Card;
