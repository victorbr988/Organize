import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import userTransaction from '../slices/addTransaction';
import initialMoney from '../slices/initialMoney';

export const store = configureStore({
  reducer: {
    userReducer,
    userTransaction,
    initialMoney,
  },
});
