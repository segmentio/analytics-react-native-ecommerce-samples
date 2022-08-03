import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {Product} from '../types';
type CartState = {products: Product[]};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  } as CartState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products = [...state.products, action.payload];
    },
    removeProduct(state, action: PayloadAction<Product>) {
      let productRemoved = action.payload.name;
      state.products = state.products.filter(
        product => product.name !== productRemoved,
      );
    },
  },
});

export const {addProduct, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;
