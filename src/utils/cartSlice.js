import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cartItems");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: savedCart ? JSON.parse(savedCart) : [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items)); 
    },

    removeItems: (state) => {
      state.items.pop();
      localStorage.setItem("cartItems", JSON.stringify(state.items)); 
    },
     removeSingleItem: (state, action) => {
      const itemIdToRemove = action.payload.card.info.id;
      const index = state.items.findIndex(
        (item) => item.card.info.id === itemIdToRemove
      );
      if (index !== -1) {
        state.items.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    clearCart: (state) => {
      state.items.length = 0;
      localStorage.removeItem("cartItems"); 
    },
  },
});

export const { addItems, removeItems, clearCart, removeSingleItem } = cartSlice.actions;
export default cartSlice.reducer;
