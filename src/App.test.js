import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the App Bar", () => {
  const { getByText } = render(<App />);
  const title = getByText("Govini Tic Tac Toe", { exact: true });
  expect(title).toBeInTheDocument();
});

test("renders the title", () => {
  const { getByText } = render(<App />);
  const title = getByText("Tic Tac Toe", { exact: true });
  expect(title).toBeInTheDocument();
});

test("renders Player 1 at App start", () => {
  const { getByText } = render(<App />);
  const currentPlayer = getByText("Player 1", { exact: true });
  expect(currentPlayer).toBeInTheDocument();
});

test("renders Player 2 after Player 1's turn", () => {
  const { container, getByText } = render(<App />);
  const button = container.querySelector("button");

  fireEvent.click(button);
  const currentPlayer = getByText("Player 2", { exact: true });
  expect(currentPlayer).toBeInTheDocument();
});

test("renders go back to start button after a move", () => {
  const { container, getByText } = render(<App />);
  const button = container.querySelector("button");

  fireEvent.click(button);

  const square = getByText("Go back to start");
  expect(square).toBeInTheDocument();
});

test("renders an X in the square for Player 1", () => {
  const { container, getByText } = render(<App />);
  const button = container.querySelector("button");

  fireEvent.click(button);

  const square = getByText("X", { exact: true });
  expect(square).toBeInTheDocument();
});

test("renders an O in the square for Player 2", () => {
  const { getByTestId, getByText } = render(<App />);
  const buttons = [getByTestId("square-0"), getByTestId("square-1")];

  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[1]);

  const square = getByText("O", { exact: true });
  expect(square).toBeInTheDocument();
});

test("renders the move history", () => {
  const { container, getByText } = render(<App />);
  const button = container.querySelector("button");

  fireEvent.click(button);

  const square = getByText("Player 1 takes 0");
  expect(square).toBeInTheDocument();
});

test("renders winner when a player wins", () => {
  const { getByTestId, getByText } = render(<App />);
  const buttons = [
    getByTestId("square-0"),
    getByTestId("square-1"),
    getByTestId("square-2"),
    getByTestId("square-3"),
    getByTestId("square-4")
  ];

  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[3]);
  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[4]);
  fireEvent.click(buttons[2]);

  const winner = getByText(/Winner/i, { exact: true });
  expect(winner).toBeInTheDocument();
});

test("renders Draw when it is a draw", () => {
  const { getByTestId, getByText } = render(<App />);
  const buttons = [
    getByTestId("square-0"),
    getByTestId("square-1"),
    getByTestId("square-2"),
    getByTestId("square-3"),
    getByTestId("square-4"),
    getByTestId("square-5"),
    getByTestId("square-6"),
    getByTestId("square-7"),
    getByTestId("square-8")
  ];

  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[3]);
  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[4]);

  fireEvent.click(buttons[5]);
  fireEvent.click(buttons[2]);

  fireEvent.click(buttons[6]);
  fireEvent.click(buttons[7]);
  fireEvent.click(buttons[8]);

  const draw = getByText(/Draw/i, { exact: true });
  expect(draw).toBeInTheDocument();
});

test("renders New Game button when a player wins", () => {
  const { getByTestId, getByText } = render(<App />);
  const buttons = [
    getByTestId("square-0"),
    getByTestId("square-1"),
    getByTestId("square-2"),
    getByTestId("square-3"),
    getByTestId("square-4")
  ];

  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[3]);
  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[4]);
  fireEvent.click(buttons[2]);

  const newGame = getByText(/Start New Game/i, { exact: true });
  expect(newGame).toBeInTheDocument();
});

test("renders New Game button when it is a draw", () => {
  const { getByTestId, getByText } = render(<App />);
  const buttons = [
    getByTestId("square-0"),
    getByTestId("square-1"),
    getByTestId("square-2"),
    getByTestId("square-3"),
    getByTestId("square-4"),
    getByTestId("square-5"),
    getByTestId("square-6"),
    getByTestId("square-7"),
    getByTestId("square-8")
  ];

  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[3]);
  fireEvent.click(buttons[1]);
  fireEvent.click(buttons[4]);

  fireEvent.click(buttons[5]);
  fireEvent.click(buttons[2]);

  fireEvent.click(buttons[6]);
  fireEvent.click(buttons[7]);
  fireEvent.click(buttons[8]);

  const newGame = getByText(/Start New Game/i, { exact: true });
  expect(newGame).toBeInTheDocument();
});
