import { Module } from "vuex";
import { StateInterface } from "@/store";

import state, { GameState } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const gameModule: Module<GameState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default gameModule;
