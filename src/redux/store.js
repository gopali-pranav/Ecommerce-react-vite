import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import searchQuerySlice from "./searchQuerySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    searchQuery: searchQuerySlice,
  },
});
