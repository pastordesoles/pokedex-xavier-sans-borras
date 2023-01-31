import { PokemonData } from "../../../hooks/types";
import {
  Action,
  LoadPokemonAction,
} from "../../actions/pokemonActions/actions";
import PokemonActionType from "../../actions/pokemonActions/pokemonActionTypes";

const pokemonReducer = (
  currentPokemon: PokemonData[],
  action: Action
): PokemonData[] => {
  let newPokemon: PokemonData[];
  newPokemon =
    action.type === PokemonActionType.loadPokemon
      ? [...(action as LoadPokemonAction).payload]
      : [...currentPokemon];
  return newPokemon;
};

export default pokemonReducer;
