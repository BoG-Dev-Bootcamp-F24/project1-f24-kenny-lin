import React from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import Pokemon from './Pokemon'; 

const PokemonPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const pokemonId = parseInt(id, 10);  

  const handlePrevious = () => {
    if (pokemonId > 1) {
      navigate(`/Pokemon/${pokemonId - 1}`);  
    }
  };

  const handleNext = () => {
    if (pokemonId < 1025) {
      navigate(`/Pokemon/${pokemonId + 1}`);  
    }
  };

  return (
    <div>
      <h1>Bits of Good Mid-Semester Project</h1>
      
      <button onClick={handlePrevious}>PREV</button>
      <button onClick={handleNext}>NEXT</button>

      <Pokemon id={pokemonId} />
    </div>
  );
};

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/Pokemon/1" />} />

      <Route path="/Pokemon/:id" element={<PokemonPage />} />
      
      <Route path="*" element={<p>404 Not Found</p>} />
    </Routes>
  );
};

export default App;
