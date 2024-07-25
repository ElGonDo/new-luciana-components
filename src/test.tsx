import React from 'react';
import ReactDOM from 'react-dom';
import { MiComponente } from './components';

const App = () => {
  const handleClick = () => {
    alert('¡Hola desde MiComponente!');
  };

  return (
    <div>
      <h1>Prueba de Mi Componente</h1>
      <MiComponente title="Mi Componente" onClick={handleClick} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));