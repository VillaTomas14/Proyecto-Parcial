export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#aaa',
      padding: '12px 20px',
      textAlign: 'center',
      fontSize: '14px',
      boxShadow: '0 -2px 6px rgba(0,0,0,0.3)',
      marginTop: 'auto',
      fontStyle: 'italic',
      userSelect: 'none',
    }}>
      <p>© 2025 App de Actividades. Todos los derechos reservados.</p>
      <div style={{ marginTop: '8px' }}>
        <a 
          href="https://www.instagram.com/villatommy_10/?hl=es" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}
          aria-label="Instagram"
        >
          📸 Instagram
        </a>
        <a 
          href="villatomas.tv.14@gmail.com" 
          style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}
          aria-label="Email"
        >
          📧 Gmail
        </a>
        <a 
          href="tel:+549 299 328-0624" 
          style={{ color: '#aaa', margin: '0 10px', textDecoration: 'none' }}
          aria-label="Teléfono"
        >
          📞 +549 299 328-0624
        </a>
      </div>
    </footer>
  );
}
