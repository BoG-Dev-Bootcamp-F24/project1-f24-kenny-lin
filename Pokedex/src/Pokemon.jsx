import React, { useState, useEffect } from 'react';

const Pokemon = ({ id }) => {
  const [pokemonData, setPokemonData] = useState(null); 

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setPokemonData(null); 
      }
    };

    fetchPokemon();
  }, [id]); //runs when id changes

  if (!pokemonData) {
    return <p>O__O</p>;
  }


  return (
    <div>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>{pokemonData.name}</p>
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Abilities:</p>

      <p>Types:</p>
      <ul>
        {pokemonData.types.map((typeInfo, index) => (
          <li key={index}>{typeInfo.type.name}</li> 
        ))}
      </ul>
      
      <p>Abilities:</p>
      <ul>
        {pokemonData.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>

      <p>Moves:</p>
      <ul>
        {pokemonData.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemon;
