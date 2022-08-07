import { Board, Player } from "@/store/types";

export const createSquareBoard = (numberOfRowsAndColumns: number) => {
  return [...Array(numberOfRowsAndColumns)].map(() =>
    Array(numberOfRowsAndColumns).fill(null)
  );
};

export const canPlayOnThisCell = (row: number, col: number, board: Board) =>
  !board[row][col];

export const isAllCellsFilled = (board: Board) =>
  board.every((row) => row.every((move) => !!move));

//Check Win conditions

export const isHorizontalWinner = (symbol: Player, board: Board) => {
  return board.some((moves) => moves.every((move) => move === symbol));
};

const transposeBoard = (board: Board) => {
  return board.map((_, index) => board.map((row) => row[index]));
};

export const isVerticalWinner = (symbol: Player, board: Board) => {
  return transposeBoard(board).some((moves) =>
    moves.every((move) => move === symbol)
  );
};

const getDiagonalMoves = (board: Board) => {
  const diagonalMoves = [];
  const equalBasedDiagonal = []; // i === j
  const sumBasedDiagonal = []; // i + j == n -1

  // Check for left to right diagonal moves
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (row === col) {
        equalBasedDiagonal.push(board[row][col]);
      }
    }
  }

  // Check for right to left diagonal moves
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (row + col === board.length - 1) {
        sumBasedDiagonal.push(board[row][col]);
      }
    }
  }

  diagonalMoves.push(equalBasedDiagonal, sumBasedDiagonal);
  return diagonalMoves;
};

export const isDiagonalWinner = (symbol: Player, board: Board) => {
  return getDiagonalMoves(board).some((moves) =>
    moves.every((move) => move === symbol)
  );
};

export const isWinner = (symbol: Player, board: Board) =>
  isHorizontalWinner(symbol, board) ||
  isVerticalWinner(symbol, board) ||
  isDiagonalWinner(symbol, board);
