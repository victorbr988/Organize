import { createSlice } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

const transaction = {
  id: v4(),
  values: 0,
  type: '',
  date: '',
  description: '',
  category: '',
};


export const userTransaction = createSlice({
  name: 'transaction',
  initialState: transaction,
  reducers: {
    setValue: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
  },
});

export const { setValue } = userTransaction.actions;
export default userTransaction.reducer;
