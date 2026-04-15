import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Pokedex from "./pages/Pokedex/pokedex";
import Busca from "./pages/Busca"; 

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        
        <nav className="sidebar">
          <h2>Menu</h2>
          <Link to="/">🏠 Home</Link>
          <Link to="/pokedex">📖 Pokédex</Link>
          <Link to="/busca">🔍 Buscar Pokémon</Link>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={
              <div style={{ textAlign: 'center' }}>
                <h1>Bem-vindo à Pokédex</h1>
                <p>Navegue pelo menu lateral para explorar a lista completa ou buscar um Pokémon específico.</p>
              </div>
            } />
            
            {/* Mantém o componente Pokedex original dos seus colegas */}
            <Route path="/pokedex" element={<Pokedex />} />
            
            {/* Adiciona a sua nova página de Busca */}
            <Route path="/busca" element={<Busca />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;

