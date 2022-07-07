import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const loginUser = {
  id: v4(),
  name: '',
};

export const userData = createSlice({
  name: 'user',
  initialState: loginUser,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = userData.actions;
export default userData.reducer;
