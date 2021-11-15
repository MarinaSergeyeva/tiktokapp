import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <Link to="/" style={{ padding: 5 }}>
        Home
      </Link>
      <Link to="/user" style={{ padding: 5 }}>
        User
      </Link>
    </nav>
  );
};
