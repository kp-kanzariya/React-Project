// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { userId, item } = action.payload;
      if (!state.cart[userId]) state.cart[userId] = [];
      state.cart[userId].push(item);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeItem(state, action) {
      const { userId, itemId } = action.payload;
      state.cart[userId] = state.cart[userId].filter((item) => item.id !== itemId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart(state, action) {
      const { userId } = action.payload;
      state.cart[userId] = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
