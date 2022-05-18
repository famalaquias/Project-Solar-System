// 2. Crie um componente chamado SolarSystem
// Crie um componente chamado SolarSystem dentro da pasta src/components.
// Este componente deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="solar-system".
// Renderize o componente SolarSystem abaixo do Header, dentro do componente principal App.

import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
import './PlanetCard.css';

class SolarSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      planetas: ['Mercúrio', 'Vênus', 'Terra', 'Marte',
        'Júpiter', 'Saturno', 'Urano', 'Netuno'],
    };
  }

  render() {
    const { planetas } = this.state;
    return ( // Requisito 04: renderize o componente Title dentro do componente SolarSystem. O componente Title deve ser renderizado recebendo a prop headline com o valor "Planetas".
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <div className="planets-solar-system">
          {planets.map((planeta, index) => ( // Requisito 06: Map: retornar um array com vários planetas e cada um terá uma key única para diferenciá-los.
            <PlanetCard // é a classe que foi criada em PlanetCard e que vai ser renderizada na página.
              key={ planeta.name } // key: é usado para diferenciar, dentro de uma lista de planetas, cada planeta.
              planetName={ planeta.name }
              planetImage={ planeta.image }
              PlanetCard={ planetas[index] }
            />
          ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
