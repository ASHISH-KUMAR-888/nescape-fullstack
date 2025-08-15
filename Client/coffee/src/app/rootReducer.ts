import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import headerReducer from "../features/header/headerSlice";
import footerReducer from "../features/footer/footerSlice";
import productOneReducer from "../features/products/productOneSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
  header: headerReducer,
  products: productsReducer,
  wishlist: wishlistReducer,
  product: productOneReducer,
  cart: cartReducer,
  footer: footerReducer,
});

export default rootReducer;
