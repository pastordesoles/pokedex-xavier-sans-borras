import { Dispatch } from "react";
import { PokemonData } from "../../../hooks/types";
import { Action } from "../../actions/pokemonActions/actions";

export interface PokemonContextStructure {
  currentPokemonState: PokemonData[];
  dispatch: Dispatch<Action>;
}
