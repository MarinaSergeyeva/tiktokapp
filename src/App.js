import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/CustomRoutes/PrivateRoute';
// import PublicRoute from './components/CustomRoutes/PublicRoute';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Post } from './pages/Post';
import { User } from './pages/User';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="/user" element={<User />} />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
