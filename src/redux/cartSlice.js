import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload);
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
