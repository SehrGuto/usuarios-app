import React, { useState } from 'react';

function TablaUsuarios({ usuarios }) {
  const [filtro, setFiltro] = useState('');

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.name.toLowerCase().includes(filtro.toLowerCase()) ||
    usuario.email.toLowerCase().includes(filtro.toLowerCase()) ||
    usuario.address.city.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nombre, email o ciudad"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>{usuario.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaUsuarios;