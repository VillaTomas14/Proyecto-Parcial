import React, { useState } from 'react';
import SelectorGeneral from './components/SelectorGeneral';
import Botones from './Botones';

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const actividades = ["Cantar", "Comer", "Estudiar", "Jugar", "Programar"];

function FormularioPrincipal() {
  const [dia, setDia] = useState('');
  const [actividad, setActividad] = useState('');

  const manejarEnvio = () => {
    alert(`El día ${dia}, realizaste: ${actividad}`);
    setDia('');
    setActividad('');
  };

  const manejarBorrar = () => {
    setDia('');
    setActividad('');
  };

  return (
    <div>
      <h1>Mis actividades por día</h1>
      <SelectorGeneral etiqueta="Día de la semana" opciones={diasSemana} valor={dia} actualizarValor={setDia} />
      <SelectorGeneral etiqueta="Actividad" opciones={actividades} valor={actividad} actualizarValor={setActividad} />
      <Botones alEnviar={manejarEnvio} alBorrar={manejarBorrar} />
    </div>
  );
}

export default FormularioPrincipal;
