import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: { selectedValue: '' },
  reducers: {
    setSelectedValue: (state, action) => {
      state.selectedValue = action.payload;
    },
  },
});

export const { setSelectedValue } = categorySlice.actions;

export default categorySlice.reducer;