import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

import productos from "../data/productos.json";

export default function Home() {
  const [filtrados, setFiltrados] = useState(productos);

  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar productos={productos} onFiltrar={setFiltrados} />
      <ProductGrid productos={filtrados} />
      <Footer />
    </>
  );
}