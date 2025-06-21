import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    marginRight: '20px',
    padding: '8px 16px',
    borderRadius: '5px',
    textDecoration: 'none',
    color: location.pathname === path ? 'white' : '#333',
    backgroundColor: location.pathname === path ? '#007bff' : 'transparent',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    transition: 'background-color 0.3s, color 0.3s',
  });

  return (
    <nav style={{
      backgroundColor: '#222',
      padding: '12px 24px',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      marginBottom: '20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <Link to="/" style={linkStyle('/')}>Inicio</Link>
      <Link to="/formulario" style={linkStyle('/formulario')}>Formulario</Link>
      <Link to="/resumen" style={linkStyle('/resumen')}>Resumen</Link>
    </nav>
  );
}
