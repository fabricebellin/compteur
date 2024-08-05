import React from 'react';

function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div className="counter-container">
      {/* Affichage de la valeur actuelle */}
      <div className="counter-value">
        <p>Valeur actuelle : {count}</p>
      </div>
      {/* Boutons d'incrémentation et décrémentation */}
      <div className="counter-buttons">
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
