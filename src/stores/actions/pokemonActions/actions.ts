import { PokemonData } from "../../../hooks/types";
import PokemonActionType from "./pokemonActionTypes";

export interface Action {
  type: PokemonActionType;
  payload?: unknown;
}

export interface LoadCharactersAction extends Action {
  type: PokemonActionType.loadPokemons;
  payload: PokemonData[];
}
