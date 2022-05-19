import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export const slice = createSlice({
  name: "load",
  initialState: {
    malformedNumber: false,
  },
  reducers: {
    setmalformedNumber(state) {
      return { ...state, malformedNumber: true };
    },
    unsetmalformedNumber(state) {
      return { ...state, malformedNumber: false };
    },
  },
});

export const { setmalformedNumber, unsetmalformedNumber } = slice.actions;

export const selectMalFormed = (state: RootState) => state.load.malformedNumber;

export default slice.reducer;
