import "./App.css";
// import { useApp } from "./App.hook";
import Pokedex from "./pages/Pokedex/pokedex";

function App() {
  // const { loading, pokemons, onPokemonSelect } = useApp();
;

  // const renderPokedex = () => (
  //   <>
  //     {/* <h1>Pokédex</h1>
  //     <h2>Selecione um Pokémon</h2>
  //     <section>
  //       <ul className="pokemon-grid">
  //         {pokemons.map((pokemon) => (
  //           <li key={pokemon.id}>
  //             <div
  //               onClick={() => onPokemonSelect(pokemon)}
  //               className="pokemon-wrapper"
  //             >
  //               <h3>{pokemon.name}</h3>
  //               <p className={`type-${pokemon.type1.toLowerCase()}`}>
  //                 {pokemon.type1}
  //               </p>
  //               {pokemon.type2 && (
  //                 <p className={`type-${pokemon.type2.toLowerCase()}`}>
  //                   {pokemon.type2}
  //                 </p>
  //               )}
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </section> */}
  //     <Pokedex></Pokedex>
  //   </>
  // );

  // return <main>{loading ? renderLoading() : renderPokedex()}</main>;
  return(
    <>
    <Pokedex></Pokedex>
    </>
  );
}

export default App;

