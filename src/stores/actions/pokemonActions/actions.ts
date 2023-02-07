import { PokemonData, PokemonStats } from "../../../hooks/types";
import PokemonActionType from "./pokemonActionTypes";

export interface Action {
  type: PokemonActionType;
  payload?: unknown;
}

export interface LoadPokemonAction extends Action {
  type: PokemonActionType.loadPokemon;
  payload: PokemonData[];
}

export interface LoadPokemonDetail extends Action {
  type: PokemonActionType.loadDetailedPokemon;
  payload: PokemonStats;
}

export interface LoadFavouritePokemon extends Action {
  type: PokemonActionType.loadFavouritePokemon;
  payload: PokemonStats[];
}

export interface DeleteFavouritePokemon extends Action {
  type: PokemonActionType.deleteFavouritePokemon;
  payload: string | number;
}
