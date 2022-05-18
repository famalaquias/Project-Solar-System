// 9. Crie um componente chamado MissionCard.
// Crie um componente chamado MissionCard dentro da pasta src/components.
// O componente MissionCard deve receber quatro props: name, year, country, destination
// O componente MissionCard deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="mission-card".
// O componente MissionCard deve renderizar o texto recebido pela prop name. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="mission-name".
// O componente MissionCard deve renderizar o texto recebido pela prop year. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="mission-year".
// O componente MissionCard deve renderizar o texto recebido pela prop country. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="mission-country".
// O componente MissionCard deve renderizar o texto recebido pela prop destination. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="mission-destination"

import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name" className="mission-name">{name}</p>
        <div className="mission-dados">
          <p data-testid="mission-year">{year}</p>
          <p data-testid="mission-country">{country}</p>
          <p data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
