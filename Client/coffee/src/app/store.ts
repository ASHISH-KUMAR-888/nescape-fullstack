import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import apiMiddleware from "./middleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [apiMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
