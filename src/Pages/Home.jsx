import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

import productos from "../data/productos.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGrid productos={productos} />
      <Footer />
    </>
  );
}