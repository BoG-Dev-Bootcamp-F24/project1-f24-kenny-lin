import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PokemonPage from './pages/PokemonPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokemon/1" />} />
      <Route path="/pokemon/:id" element={<PokemonPage />} />
      <Route path="*" element={<p>404 Not Found</p>} />
    </Routes>
  );
};

export default App;
