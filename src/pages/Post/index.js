import React from 'react';
import { useParams } from 'react-router-dom';
import { BlogPosts } from '../../pages/Home/mockData';

export const Post = () => {
  const { slug } = useParams();
  const post = BlogPosts.find(post => post.id === slug);
  console.log(`post`, post, slug);

  return (
    <div style={{ padding: 20 }}>
      <h3>{post.text}</h3>
    </div>
  );
};
