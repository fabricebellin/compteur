import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  // Utilisation de useState pour gérer l'état local du compteur
  const [count, setCount] = useState(0); 

  // Fonction d'incrémentation du compteur
  const incrementCount = () => {
    setCount(count + 1); 
  };

  // Fonction de décrémentation du compteur
  const decrementCount = () => {
    setCount(count - 1); 
  };

  return (
    <div className="App">
      <h1>Compteur</h1> 
      {/* 
        Composant Counter :
        - Reçoit la valeur actuelle du compteur (count)
        - Reçoit les fonctions d'incrémentation et de décrémentation
      */}
      <Counter count={count} onIncrement={incrementCount} onDecrement={decrementCount} /> 
    </div>
  );
}

export default App;
