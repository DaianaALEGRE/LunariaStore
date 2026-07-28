import ProductCard from "./ProductCard";
import { getCategoria } from "../utils/getCategorias";

export default function ProductGrid({ productos }) {
  const grupos = productos.reduce((acc, producto) => {
    const categoria = getCategoria(producto.nombre);
    if (!acc[categoria]) acc[categoria] = [];
    acc[categoria].push(producto);
    return acc;
  }, {});

  return (
    <section id="catalogo">
      {Object.entries(grupos).map(([categoria, items]) => (
        <div key={categoria} className="categoria-bloque">
          <h3 className="categoria-titulo">{categoria}</h3>

          <div className="grid">
            {items.map(producto => (
              <ProductCard key={producto.link} producto={producto} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}