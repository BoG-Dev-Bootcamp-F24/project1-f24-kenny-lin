const Details = ({ view, pokemon }) => {
  const renderInfo = () => (
    <div>
      <h3>Info</h3>
      <p>Height: {pokemon.height}m</p>
      <p>Weight: {pokemon.weight}kg</p>
      <ul>
        {Object.entries(pokemon.stats).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderMoves = () => (
    <div>
      <h3>Moves</h3>
      <ul>
        {pokemon.moves.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="details-container">
      {view === 'info' ? renderInfo() : renderMoves()}
    </div>
  );
};

export default Details;

