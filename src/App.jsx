import React from 'react';
import Saudacao from './Saudacao'; // Importando o novo componente

function App() {
  const isDaytime = true; // Mude para false para renderizar "Boa noite"

  return (
    <div>
      <Saudacao isDaytime={isDaytime} /> {/* Passando a prop isDaytime */}
    </div>
  );
}

export default App;
