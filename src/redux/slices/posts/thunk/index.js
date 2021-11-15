import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = `e517d763dbmsh73ba5966d15ee6fp156bddjsn44ff9836e2ba`;

export const fetchPostsThunk = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://tiktok33.p.rapidapi.com/trending/feed',
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
