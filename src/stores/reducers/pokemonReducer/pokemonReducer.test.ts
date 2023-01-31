import mockPokemonResponse from "../../../mocks/mockResponses/mockPokemonResponse";
import {
  Action,
  LoadPokemonAction,
} from "../../actions/pokemonActions/actions";
import { loadPokemonActionsCreator } from "../../actions/pokemonActions/pokemonActionCreators";
import PokemonActionType from "../../actions/pokemonActions/pokemonActionTypes";
import { CurrentPokemonState } from "../../contexts/pokemonContext/types";
import pokemonReducer from "./pokemonReducer";

describe("Given a pokemonReducer", () => {
  describe("When it receives a list of Pokemon and the action loadPokemon", () => {
    test("Then it should return a list of Pokemon", () => {
      const newPokemonState: CurrentPokemonState = {
        currentPokemon: mockPokemonResponse,
      };

      const action: LoadPokemonAction = {
        type: PokemonActionType.loadPokemon,
        payload: newPokemonState.currentPokemon,
      };

      const currentPokemonState = {};

      const resultPokemonState = pokemonReducer(
        currentPokemonState as CurrentPokemonState,
        action
      );

      expect(resultPokemonState.currentPokemon).toStrictEqual(
        newPokemonState.currentPokemon
      );
    });
  });

  describe("When it receives a list of Pokemon and an unknown action", () => {
    test("Then it should return the same list of Pokemon", () => {
      const unknownAction: Action = {
        type: PokemonActionType.unknownAction,
      };

      const currentPokemonState: CurrentPokemonState = { currentPokemon: [] };

      const resultPokemon = pokemonReducer(currentPokemonState, unknownAction);

      expect(resultPokemon).toStrictEqual(currentPokemonState);
    });
  });
});
