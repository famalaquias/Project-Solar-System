// 7. Crie um componente chamado Missions:
// Crie um componente chamado Missions dentro da pasta src/components.
// Este componente deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="missions".
// Renderize o componente Missions abaixo do SolarSystem, dentro do componente principal App.

import React from 'react';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" />
    );
  }
}

export default Missions;
