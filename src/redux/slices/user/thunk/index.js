import { createAsyncThunk } from '@reduxjs/toolkit';
import userFeed from '../../../../pages/Home/user-feed.json';

// const API_KEY = `e517d763dbmsh73ba5966d15ee6fp156bddjsn44ff9836e2ba`;
const API_KEY = `c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66`;

export const fetchUserInfoThunk = createAsyncThunk(
  'user/fetchUserInfo',
  async (userName, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://tiktok33.p.rapidapi.com/user/info/${userName}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
            'x-rapidapi-key': API_KEY,
          },
        },
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchUserPostsThunk = createAsyncThunk(
  'user/fetchUserPosts',
  async (userName, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://tiktok33.p.rapidapi.com/user/feed/${userName}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
            'x-rapidapi-key': API_KEY,
          },
        },
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      // const data = await response.json();

      // return data;
      return userFeed;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
