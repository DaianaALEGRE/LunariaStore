import ProductCard from "./ProductCard";

export default function ProductGrid({ productos }) {
  return (

    <section className="grid">

      {productos.map(producto => (

        <ProductCard
          key={producto.link}
          producto={producto}
        />

      ))}

    </section>

  );
}