import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'product',
  initialState: {
    total: 0,
  },
  reducers: {
    setTotal(state, action: PayloadAction<number>) {
      state.total = state.total + action.payload;
    },
  },
});

export const {setTotal} = cartSlice.actions;
export default cartSlice.reducer;
