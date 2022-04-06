// 2. Crie um componente chamado SolarSystem
// Crie um componente chamado SolarSystem dentro da pasta src/components.
// Este componente deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="solar-system".
// Renderize o componente SolarSystem abaixo do Header, dentro do componente principal App.

import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return ( // Requisito 04: renderize o componente Title dentro do componente SolarSystem. O componente Title deve ser renderizado recebendo a prop headline com o valor "Planetas".
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
      </>
    );
  }
}

export default SolarSystem;
