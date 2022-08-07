export type Player = "X" | "O";
export type Cell = Player | null;
export type CurrentGameState = Player | "DRAW" | "CONTINUE";
export type Board = Cell[][];
