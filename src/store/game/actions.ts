import { ActionTree } from "vuex";
import { GameState } from "./state";
import { StateInterface } from "@/store";

const actions: ActionTree<GameState, StateInterface> = {
  createBoard: ({ commit }, payload) => commit("createBoard", payload),
  makeMove: ({ commit }, payload) => commit("makeMove", payload),
};

export default actions;
