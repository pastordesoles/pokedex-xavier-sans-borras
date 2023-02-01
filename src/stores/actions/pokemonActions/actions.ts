import { PokemonData, PokemonDetail } from "../../../hooks/types";
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
  payload: PokemonDetail;
}
