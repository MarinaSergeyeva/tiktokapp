import React from 'react';
import { Outlet } from 'react-router';
import { PostList } from '../../components/PostLIst';
import { BlogPosts } from './mockData';

export const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Posts</h2>
      <PostList data={BlogPosts} />

      <Outlet />
    </div>
  );
};
