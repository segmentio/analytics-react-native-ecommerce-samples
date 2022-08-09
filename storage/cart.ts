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
      let newProduct: Product = action.payload;
      if (state.products === undefined || state.products.length === 0) {
        state.products = [newProduct];
      } else {
        for (let product of state.products) {
          if (
            product.name === newProduct.name &&
            product.grip.name === newProduct.grip.name &&
            product.size === newProduct.size
          ) {
            product.quantity = product.quantity + 1;
            return;
          }
        }
        state.products = [...state.products, newProduct];
      }
    },
    removeProduct(state, action: PayloadAction<Product>) {
      let productRemoved = action.payload.id;
      state.products = state.products.filter(
        product => product.id !== productRemoved,
      );
    },
    decreaseProductQuantity(state, action: PayloadAction<Product>) {
      for (let product of state.products) {
        if (product.id === action.payload.id) {
          product.quantity = product.quantity - 1;
          return;
        }
      }
    },
  },
});

export const {addProduct, removeProduct, decreaseProductQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
