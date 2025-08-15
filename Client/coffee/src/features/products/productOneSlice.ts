import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  product: [],
  error: null,
};

const productOneSlice = createSlice({
  name: "productOne",
  initialState,
  reducers: {
    getProductOneLoad: (state) => {
      state.loading = true;
    },

    getProductOne: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },

    getProductOneError: (state, action) => {
      state.loading = false;
      state.error = action.payload || "Server is not responding...";
    },
  },
});

export const { getProductOneLoad, getProductOne, getProductOneError } =
  productOneSlice.actions;

export default productOneSlice.reducer;
