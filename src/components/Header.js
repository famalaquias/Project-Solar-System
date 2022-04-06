// 1.Crie um componente chamado Header:
// Crie um componente chamado Header dentro da pasta src/components. Este componente irá renderizar o título principal da página.
// Ele deve conter uma tag header e, dentro dela, uma tag h1. O texto da tag h1 deve ser "Sistema Solar".
// Renderize o componente Header dentro do componente principal App.

import React from 'react';

class Header extends React.Component { // declaração de um componente chamado Header.
  render() { // declara o que vai ser mostrado.
    return ( // o componente Header retorna a um Cabeçalho com a tag h1 e o título Sistema Solar.
      <header>
        <h1>Sistema Solar</h1>
      </header>
    );
  }
}

export default Header; // exporta o componente Header de forma que possa ser reutilizado na aplicação.
