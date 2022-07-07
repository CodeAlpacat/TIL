import { configureStore } from '@reduxjs/toolkit';

import showCart from '../store/show-cart'
import counterReducer from './counter-quantity'

const store = configureStore({
  reducer: { showCart: showCart.reducer, counter: counterReducer }
});

export default store