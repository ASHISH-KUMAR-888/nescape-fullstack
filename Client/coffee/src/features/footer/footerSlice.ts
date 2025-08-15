import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  anchors: [],
  loading: false,
  error: null,
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    getFooterLoad: (state) => {
      state.loading = true;
    },

    getFooter: (state, action) => {
      state.loading = false;
      state.anchors = action.payload;
    },

    getFooterError: (state, action) => {
      state.loading = false;
      state.error = action.payload || "Server is not responding, try again...";
    },
  },
});

export const { getFooterLoad, getFooter, getFooterError } = footerSlice.actions;

export default footerSlice.reducer;
