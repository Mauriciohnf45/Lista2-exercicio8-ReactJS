import React from 'react';

function Saudacao({ isDaytime }) {
  return (
    <h2>{isDaytime ? 'Bom dia' : 'Boa noite'}</h2> // Renderiza a saudação com base na prop
  );
}

export default Saudacao;
