import { useCallback, useContext } from "react";
import { loadPokemonActionsCreator } from "../stores/actions/pokemonActions/pokemonActionCreators";
import PokemonContext from "../stores/contexts/pokemonContext/PokemonContext";
import { PokemonData, PokemonDetail, PokemonName } from "./types";

let details = "https://pokeapi.co/api/v2/pokemon/charizard";

const useApi = () => {
  const { dispatch: dispatchPokemon } = useContext(PokemonContext);
  let newUrl = process.env.REACT_APP_API_URL!;
  const loadAllPokemon = useCallback(async () => {
    try {
      const response = await fetch(newUrl);
      const { results } = (await response.json()) as PokemonName;

      const pokemonData: PokemonData[] = [];

      results.forEach((pokemon) => {
        pokemonData.push({
          name: pokemon.name,
          image: `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`,
        });
      });

      dispatchPokemon(loadPokemonActionsCreator(pokemonData));
    } catch {
      throw new Error("Ups.....Fatal Error BOOOM");
    }
  }, [dispatchPokemon, newUrl]);

  const loadPokemonDetail = useCallback(async () => {
    const detailsUrl = details;
    try {
      const response = await fetch(detailsUrl);
      const apiResponse = (await response.json()) as PokemonDetail;

      return apiResponse;
    } catch {}
  }, []);

  return { loadAllPokemon, loadPokemonDetail };
};

export default useApi;
