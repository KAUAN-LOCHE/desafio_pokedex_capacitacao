import { useEffect, useState } from "react";
import httpClient from "./api/http-client";

export interface Pokemon {
  id: number;
  name: string;
  type1: string;
  type2?: string;
}

export const useApp = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  const onPokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const onPokedexRender = async () => {
    try {
      setLoading(true);
      const userId = Math.floor(Math.random() * 10) + 1;
      const user = (await httpClient.get<{ name: string }>(
        `users/${userId}`,
      )) || { name: "Treinador" };
      alert(`Bem-vindo à Pokédex, ${user.name}!`);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      alert("Bem-vindo à Pokédex, Treinador!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onPokedexRender();
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      alert(`Você selecionou ${selectedPokemon.name}!`);
    }
  }, [selectedPokemon]);

  
const POKEMONS: Pokemon[] = [
  { id: 1, name: "Bulbasaur", type1: "Grass", type2: "Poison" },
  { id: 2, name: "Ivysaur", type1: "Grass", type2: "Poison" },
  { id: 3, name: "Venusaur", type1: "Grass", type2: "Poison" },
  { id: 4, name: "Squirtle", type1: "Water" },
  { id: 5, name: "Wartortle", type1: "Water" },
  { id: 6, name: "Blastoise", type1: "Water" },
  { id: 7, name: "Charmander", type1: "Fire" },
  { id: 8, name: "Charmeleon", type1: "Fire" },
  { id: 9, name: "Charizard", type1: "Fire", type2: "Flying" },
  { id: 10, name: "Pikachu", type1: "Electric" },
  { id: 11, name: "Raichu", type1: "Electric" },
];


  return {
    loading,
    pokemons: POKEMONS,
    onPokemonSelect,
    onPokedexRender,
  };
};
