import React from 'react';
import styles from './PokemonStats.module.css';

const PokemonDetails = ({ pokemon, view }) => {

  const renderInfo = () => (
    <div className={styles.infoContainer}>
      <p>height: {pokemon.height}m</p>
      <p>weight: {pokemon.weight}kg</p>
      {Object.entries(pokemon.stats).map(([stat, value]) => (
        <p key={stat}>{stat}: {value}</p>
      ))}
    </div>
  );

  const renderMoves = () => (
    <div className={styles.movesContainer}>
      {pokemon.moves.map((move, index) => (
        <p key={index}>{move}</p>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {view === 'info' ? renderInfo() : renderMoves()}
      </div>
    </div>
  );
};

export default PokemonDetails;
