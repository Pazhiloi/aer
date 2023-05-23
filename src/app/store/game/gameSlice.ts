import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "./game.interface";

const initialState: GameState = {
  isPlaying: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.isPlaying = true;
    },
  },
});

export const { startGame } = gameSlice.actions;

export const { reducer } = gameSlice;
