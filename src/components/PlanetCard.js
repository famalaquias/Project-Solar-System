// 5. Crie um componente chamado PlanetCard:
// Crie um componente chamado PlanetCard dentro da pasta src/components.
// O componente PlanetCard deve receber duas props: uma chamada planetName e outra chamada planetImage.
// O componente PlanetCard deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="planet-card".
// O componente PlanetCard deve renderizar o texto recebido pela prop planetName. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="planet-name".
// O componente PlanetCard deve renderizar uma imagem que tenha o atributo src com o valor recebido pela prop planetImage.
// Além do atributo src, a imagem renderizada deve ter o atributo alt com o texto Planeta {planetName}, onde {planetName} é o valor recebido pela prop planetName.

import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
