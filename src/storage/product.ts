import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    setProduct(state, action: PayloadAction<[]>) {
      state.products = [...state.products, ...action.payload];
    },
  },
});

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;
