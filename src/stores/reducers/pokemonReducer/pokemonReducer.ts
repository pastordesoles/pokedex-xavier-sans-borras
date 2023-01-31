import {
  Action,
  LoadPokemonAction,
} from "../../actions/pokemonActions/actions";
import PokemonActionType from "../../actions/pokemonActions/pokemonActionTypes";
import { CurrentPokemonState } from "../../contexts/pokemonContext/types";

const pokemonReducer = (
  currentPokemonState: CurrentPokemonState,
  action: Action
): CurrentPokemonState => {
  let newPokemonState: CurrentPokemonState;
  newPokemonState =
    action.type === PokemonActionType.loadPokemon
      ? {
          ...currentPokemonState,
          currentPokemon: (action as LoadPokemonAction).payload,
        }
      : { ...currentPokemonState };
  return newPokemonState;
};

export default pokemonReducer;
