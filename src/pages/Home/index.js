import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { PostList } from '../../components/PostLIst';
import { fetchPostsThunk } from '../../redux/slices/posts/thunk';
import { BlogPosts } from './mockData';

export const Home = () => {
  const { status, error } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  return (
    <div style={{ padding: 20 }}>
      <h2>Posts</h2>
      <button type="button" onClick={() => dispatch(fetchPostsThunk())}>
        Get Posts
      </button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occurred: {error}</h2>}
      <PostList data={BlogPosts} />

      <Outlet />
    </div>
  );
};
