import React from 'react';
import { Link } from 'react-router-dom';

export const PostList = ({ data }) => {
  return (
    <ul>
      {Object.entries(data).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
