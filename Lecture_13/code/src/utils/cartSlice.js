import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // * Vanilla (Older) Redux - DON'T MUTATE STATE, returning was mandotory
      /*
      const newState = [ ...state ];
      newState.items.push(action.payload)
      return newState
      */

      // * Redux Toolkit - We should have to mutate the state, returning is not mandotory
      // * RTK uses Immer.js behind the scenes
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // * RTK - either Mutate existing the state or return the new State
      // state.items.length = 0; // state = []
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
