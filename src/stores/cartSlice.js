import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
          const { id, quantity } = action.payload;
          const existingItem = state.find((item) => item.id === id);
    
          if (existingItem) {
            existingItem.quantity += quantity;
          } else {
            state.push({ ...action.payload, quantity });
          }
        },
        remove(state, action) {
          return state.filter((item) => item.id !== action.payload);
        },
      },
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer