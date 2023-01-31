import { PokemonData } from "../../../hooks/types";
import { LoadPokemonAction } from "./actions";
import PokemonActionType from "./pokemonActionTypes";

export const loadPokemonActionsCreator = (
  pokemon: PokemonData[]
): LoadPokemonAction => ({
  type: PokemonActionType.loadPokemon,
  payload: pokemon,
});
