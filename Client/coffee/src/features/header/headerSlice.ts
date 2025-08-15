import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logo: [],
  loading: false,
  error: null,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    getLoad: (state) => {
      state.loading = true;
    },

    getHeader: (state, action) => {
      state.logo = action.payload;
      state.loading = false;
    },

    getError: (state, action) => {
      state.error = action.payload || "Server is not working, try again...";
      state.loading = false;
    },
  },
});

export const { getLoad, getHeader, getError } = headerSlice.actions;

export default headerSlice.reducer;
