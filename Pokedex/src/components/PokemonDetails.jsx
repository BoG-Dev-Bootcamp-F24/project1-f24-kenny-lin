import React from 'react';
import styles from './PokemonDetails.module.css';

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
      <ul>
        {pokemon.moves.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{view === 'info' ? 'Info' : 'Moves'}</h3>
      <div className={styles.content}>
        {view === 'info' ? renderInfo() : renderMoves()}
      </div>
    </div>
  );
};

export default PokemonDetails;
