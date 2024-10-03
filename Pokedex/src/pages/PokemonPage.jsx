import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonData } from '../utils/api';
import PokemonDetails from '../components/PokemonDetails';
import styles from './PokemonPage.module.css';

const PokemonPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);
  const [view, setView] = useState('info');

  useEffect(() => {
    const loadPokemonData = async () => {
      try {
        const data = await fetchPokemonData(id);
        setPokemonData(data);
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
      }
    };

    loadPokemonData();
  }, [id]);

  const handleNavigation = (direction) => {
    const newId = parseInt(id) + direction;
    if (newId > 0) {
      navigate(`/pokemon/${newId}`);
    }
  };

  if (!pokemonData) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Bits of Good Mid-Semester Project</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.imageContainer}>
              <img src={pokemonData.sprite} alt={pokemonData.name} className={styles.pokemonImage} />
            </div>
            <div className={styles.nameContainer}>
              <span className={styles.pokemonName}>{pokemonData.name}</span>
            </div>
            {pokemonData.types && pokemonData.types.length > 0 && (
              <div className={styles.typesContainer}>
                <span>Types: </span>
                {pokemonData.types.map(type => (
                  <span key={type} className={styles.typeTag}>{type}</span>
                ))}
              </div>
            )}
            <div className={styles.navigationButtons}>
              <button onClick={() => handleNavigation(-1)}>{'<'}</button>
              <button onClick={() => handleNavigation(1)}>{'>'}</button>
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <PokemonDetails pokemon={pokemonData} view={view} />
            <div className={styles.viewButtons}>
              <button 
                onClick={() => setView('info')} 
                className={`${styles.viewButton} ${view === 'info' ? styles.active : ''}`}
              >
                Info
              </button>
              <button 
                onClick={() => setView('moves')} 
                className={`${styles.viewButton} ${view === 'moves' ? styles.active : ''}`}
              >
                Moves
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
