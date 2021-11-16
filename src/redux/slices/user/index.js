import { createSlice } from '@reduxjs/toolkit';
import { fetchUserInfoThunk, fetchUserPostsThunk } from './thunk';

const initialState = {
  info: {},
  posts: {},
  status: null,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfo: (state, { payload }) => {
      state.info = payload;
    },
    getUserPosts: (state, { payload }) => {
      state.posts = payload;
    },
  },
  extraReducers: {
    [fetchUserInfoThunk.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchUserInfoThunk.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.info = payload;
    },
    [fetchUserInfoThunk.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    [fetchUserPostsThunk.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchUserPostsThunk.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.posts = payload;
    },
    [fetchUserPostsThunk.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export const { getUserInfo, getUserPosts } = userSlice.actions;

export const userReducer = userSlice.reducer;
