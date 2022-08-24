import { CartState } from './changeCartSlice.types';
import { findProductInCart } from './changeCartSlice.functions';

import { PayloadAction } from '@reduxjs/toolkit';

export const addProductToCartReducer = (
  state: CartState,
  action: PayloadAction<any>
) => {
  const isProductInCart = findProductInCart(state.products, action.payload);

  if (isProductInCart) {
    state.products = state.products.map((cartProduct) => {
      if (cartProduct.id === action.payload.id) {
        const quantity = cartProduct.quantity + 1;
        const productTotal = cartProduct.price * quantity;
        const updatedCartProduct: any = {
          ...cartProduct,
          quantity: quantity,
          subTotal: productTotal,
        };
        return updatedCartProduct;
      } else {
        return cartProduct;
      }
    });
    state.total += action.payload.price;
  } else {
    state.products = [...state.products, action.payload];
    state.total += action.payload.subTotal;
  }
};

export const removeProductFromCartReducer = (
  state: CartState,
  action: PayloadAction<any>
) => {
  const productInCart = findProductInCart(state.products, action.payload);
  if (productInCart && productInCart.quantity === 1) {
    state.products = state.products.filter(
      (cartProduct) => cartProduct.id !== action.payload.id
    );
    state.total -= action.payload.price;
    return;
  }

  state.products = state.products.map((cartProduct) => {
    if (cartProduct.id === action.payload.id) {
      const quantity = cartProduct.quantity - 1;
      const productTotal = cartProduct.price * quantity;

      const updatedCartProduct: any = {
        ...cartProduct,
        quantity: quantity,
        subTotal: productTotal,
      };
      return updatedCartProduct;
    } else {
      return cartProduct;
    }
  });
  state.total -= action.payload.price;
};
