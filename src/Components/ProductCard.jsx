import { Link } from "react-router-dom";

import "../styles/card.css";

export default function ProductCard({ producto }) {
  return (
    <article className="card">

      <img
        src={"https:" + producto.imagen}
        alt={producto.nombre}
      />

      <h3>{producto.nombre}</h3>

      <p className="precio">
        ${producto.precioVenta.toLocaleString("es-AR")}
      </p>

      <p>
        {producto.stock > 0
          ? `${producto.stock} disponibles`
          : "Consultar stock"}
      </p>

      <Link
        className="btn"
        to={`/producto/${encodeURIComponent(producto.link)}`}
      >
        Ver producto
      </Link>

    </article>
  );
}