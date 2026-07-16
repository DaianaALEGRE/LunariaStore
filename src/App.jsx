import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Producto from "./pages/Producto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/producto/:id" element={<Producto />} />
    </Routes>
  );
}

export default App;