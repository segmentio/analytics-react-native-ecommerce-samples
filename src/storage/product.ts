import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {Product, ProductState} from '../types';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  } as ProductState,
  reducers: {
    setProduct(state, action: PayloadAction<Product>) {
      state.products = [...state.products, action.payload];
    },
  },
});

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;
