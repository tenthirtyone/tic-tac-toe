import React from "react";
import Square from "./Square";

export default function Board({ onClick, squares }) {
  const renderSquare = i => {
    return (
      <Square
        testId={`square-${i}`}
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
