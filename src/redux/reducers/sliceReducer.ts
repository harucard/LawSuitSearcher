import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export const slice = createSlice({
  name: "load",
  initialState: {
    loading: false,
    malformedNumber: false,
    notfound: false,
    success: false,
  },
  reducers: {
    startLoading(state) {
      return { ...state, loading: true };
    },
    stopLoading(state) {
      return { ...state, loading: false };
    },
    setmalformedNumber(state) {
      return { ...state, malformedNumber: true };
    },
    unsetmalformedNumber(state) {
      return { ...state, malformedNumber: false };
    },
    setnotfound(state) {
      return { ...state, notfound: true };
    },
    unsetnotfound(state) {
      return { ...state, notfound: false };
    },
    setsuccess(state) {
      return { ...state, success: true };
    },
    unsetsuccess(state) {
      return { ...state, success: false };
    },
  },
});

export const {
  startLoading,
  stopLoading,
  setmalformedNumber,
  unsetmalformedNumber,
  setnotfound,
  unsetnotfound,
  setsuccess,
  unsetsuccess,
} = slice.actions;

export const selectLoadState = (state: RootState) => state.load.loading;
export const selectMalFormed = (state: RootState) => state.load.malformedNumber;
export const selectNotFound = (state: RootState) => state.load.notfound;
export const selectSuccess = (state: RootState) => state.load.success;
export default slice.reducer;
