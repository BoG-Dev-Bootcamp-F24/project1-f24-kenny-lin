const NavigationButtons = ({ onPrev, onNext }) => (
    <div>
      <button onClick={onPrev}>◀</button>
      <button onClick={onNext}>▶</button>
    </div>
  );
  
export default NavigationButtons;
