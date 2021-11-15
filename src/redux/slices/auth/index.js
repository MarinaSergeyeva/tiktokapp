import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    id: '',
    email: '',
    name: '',
  },
  users: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
});

export const { loginUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
