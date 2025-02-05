import React, { useState, useEffect } from 'react';
import TablaUsuarios from './TablaUsuarios';
import TarjetasUsuarios from './TarjetasUsuarios';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [vistaActual, setVistaActual] = useState('tabla');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <div className="App">
      <h1>Agencia de Detectives Shadow</h1>
      <h2>Base de datos confidencial de personas de interés</h2>
      <div className="botones-vista">
        <button onClick={() => setVistaActual('tabla')}>Tabla</button>
        <button onClick={() => setVistaActual('tarjetas')}>Tarjetas</button>
      </div>
      {vistaActual === 'tabla' && <TablaUsuarios usuarios={usuarios} />}
      {vistaActual === 'tarjetas' && <TarjetasUsuarios usuarios={usuarios} />}
    </div>
  );
}

export default App;