import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonData } from '../utils/api';
import PokemonDetails from '../components/PokemonDetails';
import Type from '../components/Type';
import styles from './PokemonPage.module.css';
import leftArrow from '../assets/left-arrow.png'; 
import rightArrow from '../assets/right-arrow.png'; 

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
    if (newId > 0 && newId < 1026) {
      navigate(`/pokemon/${newId}`);
    }
  };

  const renderLeftColumn = () => (
    <div className={styles.leftColumn}>
      {pokemonData && (
        <>
          <div className={styles.imageContainer}>
            <img src={pokemonData.sprite} alt={pokemonData.name} className={styles.pokemonImage} />
          </div>
          <div className={styles.nameContainer}>
            <span className={styles.pokemonName}>{pokemonData.name}</span>
          </div>
          
          {pokemonData.types && pokemonData.types.length > 0 && (
            <div className={styles.typesWrapper}>
              <div className={styles.typesLabelRow}>
                <span className={styles.typesLabel}>Types:</span>
              </div>
              <div className={styles.typesContainer}>
                {pokemonData.types.map(type => (
                  <Type key={type} type={type} />
                ))}
              </div>
            </div>
          )}
          <div className={styles.navigationButtons}>
            <button onClick={() => handleNavigation(-1)} className={styles.navButton}>
              <img src={leftArrow} alt="Previous" className={styles.arrowIcon} draggable="false" />
            </button>
            <button onClick={() => handleNavigation(1)} className={styles.navButton}>
              <img src={rightArrow} alt="Next" className={styles.arrowIcon} draggable="false" />
            </button>
          </div>
        </>
      )}
    </div>
  );

  const renderRightColumn = () => (
    <div className={styles.rightColumn}>
      {pokemonData && (
        <>
          <div className={styles.detailsHeading}>
            <h3>{view === 'info' ? 'Info' : 'Moves'}</h3>
          </div>
          <div className={styles.detailsContainer}>
            <PokemonDetails pokemon={pokemonData} view={view} />
          </div>
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
        </>
      )}
    </div>
  );

  if (!pokemonData) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Bits of Good Mid-Semester Project</h1>
        </div>
        <div className={styles.content}>
          {renderLeftColumn()}
          {renderRightColumn()}
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
