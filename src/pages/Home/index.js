// import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Loader from '../../components/Loader';
import { PostList } from '../../components/PostList';
import { fetchPostsThunk } from '../../redux/slices/posts/thunk';

export const Home = () => {
  const { status, error, posts } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) dispatch(fetchPostsThunk());
  }, []);

  return (
    <div style={{ padding: 20, justifyContent: 'center' }}>
      {status === 'loading' && <Loader />}
      {error && <h2>An error occurred: {error}</h2>}
      <PostList data={posts} />

      <Outlet />
    </div>
  );
};
