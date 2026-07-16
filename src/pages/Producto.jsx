import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import productos from "../data/productos.json";

import "../styles/product.css";

export default function Producto() {

  const { id } = useParams();

 const producto = productos.find(
  p => p.link === decodeURIComponent(id)
);

  if (!producto) {

    return (
      <>
        <Navbar />
        <h2>Producto no encontrado</h2>
        <Footer />
      </>
    );

  }

  return (

    <>
      <Navbar />

      <main className="producto">

        <img
          src={"https:" + producto.imagen}
          alt={producto.nombre}
        />

        <div>

          <h1>{producto.nombre}</h1>

          <h2>
            ${producto.precioVenta.toLocaleString("es-AR")}
          </h2>

          <p>{producto.descripcion}</p>

          <p>
            Stock:
            {producto.stock}
          </p>

          <a
  className="btnWhatsapp"
  href={`https://wa.me/5491157096154?text=${encodeURIComponent(
    `Hola! Quiero comprar:

Producto: ${producto.nombre}
Precio: $${producto.precioVenta.toLocaleString("es-AR")}`
  )}`}
  target="_blank"
  rel="noreferrer"
>
  Comprar por WhatsApp
</a>

        </div>

      </main>

      <Footer />

    </>
  );
}