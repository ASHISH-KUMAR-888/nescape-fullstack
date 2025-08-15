import { createSlice } from "@reduxjs/toolkit";

type id = {
  id: string;
};

const initialState = {
  loading: false,
  wishlist: [],
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    getWishlistLoad: (state) => {
      state.loading = false;
    },

    wishlist: (state, action) => {
      state.loading = true;
      const exist = state.wishlist.find(
        (item: id) => item.id === action.payload.id
      );

      if (exist) {
        state.wishlist = state.wishlist.filter(
          (item: id) => item.id !== action.payload.id
        );

        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      } else {
        state.wishlist.push(action.payload);

        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },

    setData: (state, action) => {
      state.loading = true;
      state.wishlist = action.payload;
    },

    getWishlistError: (state, action) => {
      state.loading = true;
      state.error = action.payload || "Server is not working, try again...";
    },
  },
});

export const { getWishlistLoad, wishlist, setData, getWishlistError } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
