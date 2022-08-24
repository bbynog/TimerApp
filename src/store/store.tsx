import changeCartReducer from '../features/cart/changeCartSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    cart: changeCartReducer,
  },
});
