import React from 'react';

function TarjetasUsuarios({ usuarios }) {
  return (
    <div className="tarjetas-container">
      {usuarios.map(usuario => (
        <div key={usuario.id} className="tarjeta">
          <h3>{usuario.name}</h3>
          <p><strong>Alias:</strong> {usuario.username}</p>
          <p><strong>Contacto:</strong> {usuario.email}</p>
          <p><strong>Ubicación:</strong> {usuario.address.city}</p>
          <p><strong>Teléfono:</strong> {usuario.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default TarjetasUsuarios;