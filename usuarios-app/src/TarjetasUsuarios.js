import React from 'react';

function TarjetasUsuarios({ usuarios }) {
  return (
    <div className="tarjetas-container">
      {usuarios.map(usuario => (
        <div key={usuario.id} className="tarjeta">
          <h3>{usuario.name}</h3>
          <p>Email: {usuario.email}</p>
          <p>Ciudad: {usuario.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default TarjetasUsuarios;