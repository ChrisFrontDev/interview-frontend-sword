import { MutationTree } from "vuex";
import { GameState } from "./state";
import {
  canPlayOnThisCell,
  createSquareBoard,
  isAllCellsFilled,
  isWinner,
} from "@/utils/gameEngine";

const mutation: MutationTree<GameState> = {
  createBoard(state: GameState, { boardGameType }) {
    state.board = createSquareBoard(boardGameType);
  },
  makeMove(state: GameState, { x = 0, y = 0 }) {
    if (!canPlayOnThisCell(x, y, state.board)) {
      alert("cant play on this cell because this cell is already filled");
      return;
    }
    if (state.winner !== "CONTINUE") {
      alert("cant play on this cell because the game is over");
      return;
    }
    const newBoard = [...state.board];
    newBoard[x][y] = state.currentPlayer;
    const winner = isWinner(state.currentPlayer, state.board)
      ? state.currentPlayer
      : isAllCellsFilled(newBoard)
      ? "DRAW"
      : "CONTINUE";
    state.board = newBoard;
    state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    state.winner = winner;
  },
};

export default mutation;
