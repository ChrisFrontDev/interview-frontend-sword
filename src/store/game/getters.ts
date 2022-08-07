import { GetterTree } from "vuex";
import { GameState } from "./state";
import { StateInterface } from "@/store";

const getters: GetterTree<GameState, StateInterface> = {
  isGameOver: (state) => state.winner !== "CONTINUE",
};

export default getters;
