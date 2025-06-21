import React, { useState } from 'react';
import SelectorGeneral from '../components/SelectorGeneral';
import Botones from '../components/Botones';
import { useNavigate } from 'react-router-dom';

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const actividades = ["Cantar", "Comer", "Estudiar", "Jugar", "Programar"];

function Formulario() {
  const [dia, setDia] = useState('');
  const [actividad, setActividad] = useState('');
  const navigate = useNavigate();

  const manejarEnvio = () => {
    if (dia && actividad) {
      navigate('/resumen', {
        state: { dia, actividad }
      });
    } else {
      alert("Seleccioná día y actividad");
    }
  };

  const manejarBorrar = () => {
    setDia('');
    setActividad('');
  };

  return (
    <div className="container">
      <h1>Mis actividades por día</h1>
      <SelectorGeneral etiqueta="Día de la semana" opciones={diasSemana} valor={dia} actualizarValor={setDia} />
      <SelectorGeneral etiqueta="Actividad" opciones={actividades} valor={actividad} actualizarValor={setActividad} />
      <Botones alEnviar={manejarEnvio} alBorrar={manejarBorrar} />
    </div>
  );
}

export default Formulario;