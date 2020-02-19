import React from "react";

export default function Square(props) {
  return (
    <button
      data-testid={props.testId}
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
