import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction } from "@reduxjs/toolkit";
import type { ItemCard } from "./type";


interface CartState {
  items: ItemCard[];
}

export const initialState: CartState = {
  items:[]
};

const cartSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    adddItem: (state, action: PayloadAction<ItemCard>) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { adddItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
