import { PokemonData, PokemonStats } from "../../../hooks/types";
import {
  LoadPokemonAction,
  LoadPokemonDetail,
  DeleteFavouritePokemon,
  LoadFavouritePokemon,
} from "./actions";
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

export const loadFavouritePokemonActionsCreator = (
  pokemon: PokemonStats[]
): LoadFavouritePokemon => ({
  type: PokemonActionType.loadFavouritePokemon,
  payload: pokemon,
});

export const deleteFavouritePokemonActionsCreator = (
  pokemonId: string | number
): DeleteFavouritePokemon => ({
  type: PokemonActionType.deleteFavouritePokemon,
  payload: pokemonId,
});
