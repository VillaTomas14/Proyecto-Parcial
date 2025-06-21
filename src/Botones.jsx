import React from 'react';

function Botones({ alEnviar, alBorrar }) {
  return (
    <div>
      <button onClick={alEnviar}>Enviar</button>
      <button onClick={alBorrar}>Borrar</button>
    </div>
  );
}

export default Botones;
