const CATEGORIAS = [
  { clave: "manta", nombre: "Mantas" },
  { clave: "toalla", nombre: "Toallas" },
  { clave: "pijama", nombre: "Pijamas" },
  { clave: "scrunchie", nombre: "Scrunchies" },
  { clave: "scroonchis", nombre: "Scrunchies" },
  { clave: "paño", nombre: "Paños" },
  { clave: "pano", nombre: "Paños" },
];

export function getCategoria(nombreProducto) {
  const texto = nombreProducto.toLowerCase();

  const encontrada = CATEGORIAS.find(({ clave }) => texto.includes(clave));

  return encontrada ? encontrada.nombre : "Otros productos";
}