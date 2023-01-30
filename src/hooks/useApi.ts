import { useCallback } from "react";
import { PokemonData, PokemonName } from "./types";

const useApi = () => {
  const loadAllPokemon = useCallback(async () => {
    try {
      let newUrl = `https://pokeapi.co/api/v2/pokemon?&limit=151`;
      const response = await fetch(newUrl);
      const { results } = (await response.json()) as PokemonName;
      const pokemonData: PokemonData[] = [];

      results.forEach((pokemon) => {
        pokemonData.push({
          name: pokemon.name,
          image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
        });
      });

      return pokemonData;
    } catch {
      throw new Error("Ups.....Fatal Error BOOOM");
    }
  }, []);

  return { loadAllPokemon };
};

export default useApi;
