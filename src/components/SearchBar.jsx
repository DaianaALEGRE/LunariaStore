import { useState } from "react";
import "../styles/searchbar.css";

export default function SearchBar({ productos, onFiltrar }) {
  const [busqueda, setBusqueda] = useState("");

  function handleChange(e) {
    const valor = e.target.value;
    setBusqueda(valor);

    const texto = valor.toLowerCase();

    const resultado = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(texto) ||
      producto.descripcion.toLowerCase().includes(texto)
    );

    onFiltrar(resultado);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={handleChange}
      />
    </div>
  );
}