import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Formulario from './pages/Formulario';
import Resumen from './pages/Resumen';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/resumen" element={<Resumen />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;