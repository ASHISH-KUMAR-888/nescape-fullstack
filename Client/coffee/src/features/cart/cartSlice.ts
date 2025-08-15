import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const exist = state.cart.find((item) => item.id === action.payload.id);

      if (exist) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setCart: (state, action) => {
      state.cart = action.payload;
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, action) => {
      const exist = state.cart.find((d) => d.id === action.payload);

      if (exist && exist.quantity === 1) {
        state.cart = state.cart.filter((d) => d.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return item;
        });

        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const { add, setCart, removeCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
