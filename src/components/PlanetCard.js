// 5. Crie um componente chamado PlanetCard:
// Crie um componente chamado PlanetCard dentro da pasta src/components.
// O componente PlanetCard deve receber duas props: uma chamada planetName e outra chamada planetImage.
// O componente PlanetCard deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="planet-card".
// O componente PlanetCard deve renderizar o texto recebido pela prop planetName. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="planet-name".
// O componente PlanetCard deve renderizar uma imagem que tenha o atributo src com o valor recebido pela prop planetImage.
// Além do atributo src, a imagem renderizada deve ter o atributo alt com o texto Planeta {planetName}, onde {planetName} é o valor recebido pela prop planetName.

import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetCard, key } = this.props;
    console.log(planetCard);
    return (
      <div data-testid="planet-card" key={ key } className={ planetCard }>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          id={ planetName }
        />
        <p data-testid="planet-name" className="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  planetCard: PropTypes.string.isRequired,
};

export default PlanetCard;
