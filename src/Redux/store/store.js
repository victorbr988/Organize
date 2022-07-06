import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'
import userTransaction from '../slices/addTransaction'

export const store = configureStore({
  reducer: {
    userReducer,
    userTransaction,
  }
})