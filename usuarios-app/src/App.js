import React, { useState, useEffect } from 'react';
import TablaUsuarios from './TablaUsuarios';
import TarjetasUsuarios from './TarjetasUsuarios';
import MapaUsuarios from './MapaUsuarios';
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
      <h1>Aplicación de Usuarios</h1>
      <div>
        <button onClick={() => setVistaActual('tabla')}>Tabla</button>
        <button onClick={() => setVistaActual('tarjetas')}>Tarjetas</button>
        <button onClick={() => setVistaActual('mapa')}>Mapa</button>
      </div>
      {vistaActual === 'tabla' && <TablaUsuarios usuarios={usuarios} />}
      {vistaActual === 'tarjetas' && <TarjetasUsuarios usuarios={usuarios} />}
      {vistaActual === 'mapa' && <MapaUsuarios usuarios={usuarios} />}
    </div>
  );
}

export default App;