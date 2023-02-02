import { PokemonData, PokemonStats } from "../../../hooks/types";
import { LoadPokemonAction, LoadPokemonDetail } from "./actions";
import PokemonActionType from "./pokemonActionTypes";

export const loadPokemonActionsCreator = (
  pokemon: PokemonData[]
): LoadPokemonAction => ({
  type: PokemonActionType.loadPokemon,
  payload: pokemon,
});

export const loadPokemonDetailsActionsCreator = (
  pokemonDetail: PokemonStats
): LoadPokemonDetail => ({
  type: PokemonActionType.loadDetailedPokemon,
  payload: pokemonDetail,
});
