import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const loginUser = {
  id: v4(),
  name: '',
  password: '',
};

export const userData = createSlice({
  name: 'user',
  initialState: loginUser,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setName, setPassword } = userData.actions;
export default userData.reducer;
