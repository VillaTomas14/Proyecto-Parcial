function SelectorGeneral({ etiqueta, opciones, valor, actualizarValor }) {
  return (
    <div>
      <label>{etiqueta}:</label>
      <select value={valor} onChange={(e) => actualizarValor(e.target.value)}>
        <option value="">Seleccionar</option>
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>{opcion}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectorGeneral;