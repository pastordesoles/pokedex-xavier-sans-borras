import {
  Action,
  LoadPokemonAction,
  LoadPokemonDetail,
} from "../../actions/pokemonActions/actions";
import PokemonActionType from "../../actions/pokemonActions/pokemonActionTypes";
import { CurrentPokemonState } from "../../contexts/pokemonContext/types";

const pokemonReducer = (
  currentPokemonState: CurrentPokemonState,
  action: Action
): CurrentPokemonState => {
  let newPokemonState: CurrentPokemonState;

  switch (action.type) {
    case PokemonActionType.loadPokemon:
      newPokemonState = {
        ...currentPokemonState,
        currentPokemon: (action as LoadPokemonAction).payload,
      };
      break;
    case PokemonActionType.loadDetailedPokemon:
      newPokemonState = {
        ...currentPokemonState,
        currentDetailedPokemon: (action as LoadPokemonDetail).payload,
      };
      break;
    default:
      newPokemonState = { ...currentPokemonState };
  }
  return newPokemonState;
};

export default pokemonReducer;
