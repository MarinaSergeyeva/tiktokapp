import { createSlice } from '@reduxjs/toolkit';
import { fetchPostsThunk } from './thunk';

const initialState = {
  posts: [],
  status: null,
  error: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, { payload }) => {
      state = payload;
    },
  },
  extraReducers: {
    [fetchPostsThunk.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchPostsThunk.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.posts = payload;
    },
    [fetchPostsThunk.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export const { getPosts } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
