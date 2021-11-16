import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { User } from './pages/User';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:slug" element={<User />} />
        <Route element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
