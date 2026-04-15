import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useApp } from "./App.hook";
import Home from "./pages/Home"; 

function App() {
  const { loading, pokemons, onPokemonSelect } = useApp();

  const renderLoading = () => (
    <div className="loading">
      <p>Carregando...</p>
    </div>
  );

  const renderPokedex = () => (
    <>
      <h1>Pokédex</h1>
      <h2>Selecione um Pokémon</h2>
      <section>
        <ul className="pokemon-grid">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <div
                onClick={() => onPokemonSelect(pokemon)}
                className="pokemon-wrapper"
              >
                <h3>{pokemon.name}</h3>
                <p className={`type-${pokemon.type1.toLowerCase()}`}>
                  {pokemon.type1}
                </p>
                {pokemon.type2 && (
                  <p className={`type-${pokemon.type2.toLowerCase()}`}>
                    {pokemon.type2}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route 
          path="/pokedex" 
          element={<main>{loading ? renderLoading() : renderPokedex()}</main>} 
        />
      </Routes>
    </Router>
  );
}

export default App;