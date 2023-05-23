import { GameState } from "./game.interface";

const startGameAc = (state: GameState) => {
  state.isPlaying = true;
};
