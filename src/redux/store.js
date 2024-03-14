import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import searchQueryReducer from "./searchQuerySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    searchQuery: searchQueryReducer,
  },
});
