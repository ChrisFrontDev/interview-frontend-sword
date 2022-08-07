import { Board, CurrentGameState, Player } from "@/store/types";

export interface GameState {
  board: Board;
  winner: CurrentGameState;
  currentPlayer: Player;
}

function state(): GameState {
  return {
    board: [[]],
    winner: "CONTINUE",
    currentPlayer: "X",
  };
}

export default state;
