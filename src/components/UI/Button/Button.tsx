/* eslint-disable @typescript-eslint/no-explicit-any */

import "./Button.css";

function Button(props: any) {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
