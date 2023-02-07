import { Dispatch } from "react";
import { PokemonData, PokemonStats } from "../../../hooks/types";
import { Action } from "../../actions/pokemonActions/actions";

export interface PokemonContextStructure {
  currentPokemonState: CurrentPokemonState;
  dispatch: Dispatch<Action>;
}

export interface CurrentPokemonState {
  currentPokemon: PokemonData[];
  currentDetailedPokemon: PokemonStats;
  currentFavouritePokemon: PokemonStats[];
}
