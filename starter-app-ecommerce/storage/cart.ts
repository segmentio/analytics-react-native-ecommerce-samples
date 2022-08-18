import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {Product} from '../types';
import {calculatePrice} from '../helpers';
import { gripOptions } from '../data/productInfo';
type CartState = {products: Product[], checkoutDetails: checkoutDetails};

type checkoutDetails = {
  cartId?: string;
  checkoutId?: string;
  orderId?: string;
  payment?: string;
  shipping?: string;
  currency?: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    checkoutDetails: {
      cartId: undefined,
      checkoutId: undefined,
      orderId: undefined,
      payment: 'online',
      shipping: 'standard',
      currency: 'USD',
    }
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
    removeProduct(state, action: PayloadAction<Number>) {
      let productRemoved = action.payload;
      state.products = state.products.filter(
        product => product.id !== productRemoved,
      );
    },
    decreaseProductQuantity(state, action: PayloadAction<Number>) {
      for (let product of state.products) {
        if (product.id === action.payload) {
          if (product.quantity > 1) {
            product.quantity = product.quantity - 1;
          } else {
            cartSlice.caseReducers.removeProduct(state, action);
          }
        }
      }
    },
    updateCart(state, action: PayloadAction<Number>) {
      let cart = state.checkoutDetails;
      if (cart.cartId === undefined) {
        let id = action.payload.toString();
        cart.cartId =  id.concat('-cart');
        cart.checkoutId = id.concat('-checkout');
        cart.orderId = id.concat('order');
      }
    }
  },
});

export const {addProduct, removeProduct, decreaseProductQuantity, updateCart} =
  cartSlice.actions;
export default cartSlice.reducer;
