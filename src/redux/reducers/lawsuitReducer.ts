import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { RootState } from "../store";

export const search = createAsyncThunk(
  "lawsuit",
  async (process_number: string) => {
    try {
      const response = await axios.get(
        `/api/tribproc/${process_number}?tipo_numero=5`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const types = createSlice({
  name: "lawSuit",
  initialState: {
    data: [],
    status: "stopped",
  },
  reducers: {
    findLawSuit(state, { payload }) {
      return { ...state, data: payload };
    },
    changeStatus(state, action) {
      return { ...state, status: action.payload };
    },
  },
  extraReducers(builder) {
    builder.addCase(search.pending, (state) => {
      return { ...state, status: "reading" };
    });
    builder.addCase(search.fulfilled, (state, { payload }) => {
      if (
        Object.keys(payload).length > 1 &&
        Object.keys(payload).indexOf("movs") !== -1
      ) {
        payload.movs.sort((a: any, b: any) => {
          if (new Date(a[0]) < new Date(b[0])) return -1;
          if (new Date(a[0]) > new Date(b[0])) return 1;
          return 0;
        });
      }
      return { ...state, status: "finished", data: payload };
    });
  },
});

export const { findLawSuit, changeStatus } = types.actions;
export const selectData = (state: RootState) => state.lawSuit.data;
export const selectStatus = (state: RootState) => state.lawSuit.status;
export default types.reducer;
