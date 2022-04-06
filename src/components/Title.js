// 3.Crie um componente chamado Title
// Crie um componente chamado Title dentro da pasta src/components.
// O componente Title deve receber uma prop headline.
// Ele deve conter uma tag h2, que deve renderizar o texto recebido pela prop headline.

import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props; // o componente Title possui como propriedade um objeto chamado props,
    return <h2>{headline}</h2>; // que contém todos os dados passados como parâmetro na hora de chamar o componente.
  }
}

Title.propTypes = { // garante que um dado chegue corretamente ao react.
  headline: PropTypes.string.isRequired, // SEMPRE que usar um this.prop tenho que usar o propTypes.
};

export default Title;
