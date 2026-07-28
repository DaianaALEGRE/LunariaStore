import "../styles/hero.css";

export default function Hero() {
  function irAlCatalogo() {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero">
      <h2>Mirá, elegí y pedilo por WhatsApp</h2>
      <p>
       Usa el buscador o recorré el catálogo, elegí el producto que te gusta y te ayudamos a
        pedirlo directo por WhatsApp — simple y sin vueltas.
      </p>
      <button className="btn-primary" onClick={irAlCatalogo}>
        Ver catálogo
      </button>
    </section>
  );
}