import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Pokedex from "./pages/Pokedex";
import Busca from "./pages/Busca";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/busca" element={<Busca />} />
    </Routes>
  );
}

export default App;
