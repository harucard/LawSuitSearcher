import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { RootState } from "../store";

export const getStandardTypes = createAsyncThunk(
  "get/standard-types",
  async () => {
    try {
      const response = await axios.get("/api/proc/tipos_norm_andamentos_movs");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const types = createSlice({
  name: "standard",
  initialState: {
    data: [],
    status: true,
  },
  reducers: {
    setStandardType(state, { payload }) {
      return { ...state, data: payload };
    },
    changeStatus(state) {
      return { ...state, status: !state.status };
    },
  },
  extraReducers(builder) {
    builder.addCase(getStandardTypes.pending, (state) => {
      return { ...state, status: false };
    });
    builder.addCase(getStandardTypes.fulfilled, (state, action) => {
      return { ...state, status: true, data: action.payload };
    });
  },
});

export const { setStandardType, changeStatus } = types.actions;
export const selectData = (state: RootState) => state.standard.data;
export const selectStatus = (state: RootState) => state.standard.status;
export default types.reducer;
