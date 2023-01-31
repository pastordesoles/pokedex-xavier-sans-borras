import { PokemonData } from "../../../hooks/types";
import PokemonActionType from "./pokemonActionTypes";

export interface Action {
  type: PokemonActionType;
  payload?: unknown;
}

export interface LoadPokemonAction extends Action {
  type: PokemonActionType.loadPokemon;
  payload: PokemonData[];
}
