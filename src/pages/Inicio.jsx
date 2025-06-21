import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="container">
      <h1>Bienvenido a la App de Actividades</h1>
      <p>Usá el menú o hacé clic abajo para empezar:</p>
      <Link to="/formulario">
        <button>Ir al Formulario</button>
      </Link>
    </div>
  );
}