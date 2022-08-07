import { createStore } from "vuex";

import gameModule from "./game";
import { GameState } from "./game/state";

export interface StateInterface {
  game: GameState;
}

export default createStore<StateInterface>({
  modules: {
    game: gameModule,
  },
});
