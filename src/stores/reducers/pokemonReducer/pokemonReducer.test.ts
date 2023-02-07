import { PokemonStats } from "../../../hooks/types";
import {
  mockPokemonDetail,
  mockPokemonResponse,
} from "../../../mocks/mockResponses/mockPokemonResponse";
import {
  Action,
  DeleteFavouritePokemon,
  LoadFavouritePokemon,
  LoadPokemonAction,
  LoadPokemonDetail,
} from "../../actions/pokemonActions/actions";
import PokemonActionType from "../../actions/pokemonActions/pokemonActionTypes";
import { CurrentPokemonState } from "../../contexts/pokemonContext/types";
import pokemonReducer from "./pokemonReducer";

describe("Given a pokemonReducer", () => {
  describe("When it receives a list of Pokemon and the action loadPokemon", () => {
    test("Then it should return a list of Pokemon", () => {
      const newPokemonState: CurrentPokemonState = {
        currentPokemon: mockPokemonResponse,
        currentDetailedPokemon: mockPokemonDetail,
        currentFavouritePokemon: [mockPokemonDetail],
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

  describe("When it receives a Pokemon detail and the action loadDetailedPokemon", () => {
    test("Then it should return a Pokemon detail", () => {
      const newPokemonState: CurrentPokemonState = {
        currentPokemon: mockPokemonResponse,
        currentDetailedPokemon: mockPokemonDetail,
        currentFavouritePokemon: [mockPokemonDetail],
      };

      const action: LoadPokemonDetail = {
        type: PokemonActionType.loadDetailedPokemon,
        payload: newPokemonState.currentDetailedPokemon,
      };

      const currentPokemonState = {};

      const resultPokemonState = pokemonReducer(
        currentPokemonState as CurrentPokemonState,
        action
      );

      expect(resultPokemonState.currentDetailedPokemon).toStrictEqual(
        newPokemonState.currentDetailedPokemon
      );
    });
  });

  describe("When it receives a list of Pokemon and an unknown action", () => {
    test("Then it should return the same list of Pokemon", () => {
      const unknownAction: Action = {
        type: PokemonActionType.unknownAction,
      };

      const currentPokemonState: CurrentPokemonState = {
        currentPokemon: [],
        currentDetailedPokemon: {} as PokemonStats,
        currentFavouritePokemon: [],
      };

      const resultPokemon = pokemonReducer(currentPokemonState, unknownAction);

      expect(resultPokemon).toStrictEqual(currentPokemonState);
    });
  });

  describe("When it receives a list of Pokemon and the action loadFavouritePokemon", () => {
    test("Then it should return a list of Pokemon", () => {
      const newPokemonState: CurrentPokemonState = {
        currentPokemon: mockPokemonResponse,
        currentDetailedPokemon: mockPokemonDetail,
        currentFavouritePokemon: [mockPokemonDetail],
      };

      const action: LoadFavouritePokemon = {
        type: PokemonActionType.loadFavouritePokemon,
        payload: newPokemonState.currentFavouritePokemon,
      };

      const currentPokemonState = {};

      const resultPokemonState = pokemonReducer(
        currentPokemonState as CurrentPokemonState,
        action
      );

      expect(resultPokemonState.currentFavouritePokemon).toStrictEqual(
        newPokemonState.currentFavouritePokemon
      );
    });
  });

  describe("When it receives a list of Pokemon and the action deleteFavouritePokemon", () => {
    test("Then it should return a list of Pokemon without that Pokemon", () => {
      const newPokemonState: CurrentPokemonState = {
        currentPokemon: mockPokemonResponse,
        currentDetailedPokemon: mockPokemonDetail,
        currentFavouritePokemon: [mockPokemonDetail],
      };

      const resultPokemonStateAfterDelete: CurrentPokemonState = {
        currentPokemon: mockPokemonResponse,
        currentDetailedPokemon: mockPokemonDetail,
        currentFavouritePokemon: [],
      };

      const action: DeleteFavouritePokemon = {
        type: PokemonActionType.deleteFavouritePokemon,
        payload: newPokemonState.currentDetailedPokemon.id,
      };

      const resultPokemonState = pokemonReducer(
        newPokemonState as CurrentPokemonState,
        action
      );

      expect(resultPokemonStateAfterDelete).toStrictEqual(resultPokemonState);
    });
  });
});
