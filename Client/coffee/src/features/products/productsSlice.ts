import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getLoad: (state) => {
      state.loading = true;
    },

    getProducts: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },

    getError: (state, action) => {
      state.error = action.payload || "Something is fishy, try again...";
      state.loading = false;
    },
  },
});

const { getProducts, getError, getLoad } = productsSlice.actions;

export default productsSlice.reducer;

export { getProducts, getError, getLoad };
