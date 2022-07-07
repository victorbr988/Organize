import { createSlice } from "@reduxjs/toolkit";

const transaction = [];


export const userTransaction = createSlice({
  name: 'transaction',
  initialState: transaction,
  reducers: {
    setValue: (state, action) => {
      return [...state, {...action.payload}]
    },
  },
});

export const { setValue } = userTransaction.actions;
export default userTransaction.reducer;
