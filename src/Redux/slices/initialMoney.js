import { createSlice } from "@reduxjs/toolkit";

const moneyInitial = {
  money: 0
};


export const userMoney = createSlice({
  name: 'moneyInitial',
  initialState: moneyInitial,
  reducers: {
    setMoney: (state, action) => {
      state.money = action.payload
    },
  },
});

export const { setMoney } = userMoney.actions;
export default userMoney.reducer;
