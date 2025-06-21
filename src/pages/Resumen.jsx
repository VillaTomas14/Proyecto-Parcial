import { useLocation, Link } from 'react-router-dom';

function Resumen() {
  const location = useLocation();
  const { dia, actividad } = location.state || {};

  return (
    <div className="container">
      <h1>Resumen de Actividad</h1>
      {dia && actividad ? (
        <p>El día <strong>{dia}</strong>, realizaste: <strong>{actividad}</strong></p>
      ) : (
        <p>No hay datos para mostrar.</p>
      )}
      <Link to="/formulario">
        <button>Volver al formulario</button>
      </Link>
    </div>
  );
}

export default Resumen;