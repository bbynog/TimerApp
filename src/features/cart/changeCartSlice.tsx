import type { RootState } from 'store/types';

import {
  addProductToCartReducer,
  removeProductFromCartReducer,
} from './changeCartSlice.reducers';
import { CartState } from './changeCartSlice.types';

import { createSlice } from '@reduxjs/toolkit';

const cartInitialState: CartState = {
  products: [],
  total: 0,
};

export const changeCartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addProductToCart: addProductToCartReducer,
    removeProductFromCart: removeProductFromCartReducer,
  },
});

export const { addProductToCart, removeProductFromCart } =
  changeCartSlice.actions;

export const selectCartProducts = (state: RootState) => state.cart.products;
export const selectCartTotal = (state: RootState) => state.cart.total;

export default changeCartSlice.reducer;
