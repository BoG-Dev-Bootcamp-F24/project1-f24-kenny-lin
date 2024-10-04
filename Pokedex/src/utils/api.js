export const fetchPokemonData = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return {
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map(type => type.type.name),
      stats: {
        hp: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
        attack: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
        defense: data.stats.find(stat => stat.stat.name === 'defense').base_stat,
        'special-attack': data.stats.find(stat => stat.stat.name === 'special-attack').base_stat,
        'special-defense': data.stats.find(stat => stat.stat.name === 'special-defense').base_stat,
        speed: data.stats.find(stat => stat.stat.name === 'speed').base_stat,
      },
      height: data.height / 10, 
      weight: data.weight / 10, 
      moves: data.moves.map(move => move.move.name), 
    };
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};
