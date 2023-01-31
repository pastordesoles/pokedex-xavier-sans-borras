import { PokemonData } from "../../../hooks/types";
import { Action } from "../../actions/pokemonActions/actions";
import { loadPokemonActionsCreator } from "../../actions/pokemonActions/pokemonActionCreators";
import PokemonActionType from "../../actions/pokemonActions/pokemonActionTypes";
import { CurrentPokemonState } from "../../contexts/pokemonContext/types";
import pokemonReducer from "./pokemonReducer";

describe("Given a pokemonReducer", () => {
  describe("When it receives a list of Pokemon and the action loadPokemon", () => {
    test("Then it should return a list of Pokemon", () => {
      const pokemon: CurrentPokemonState = {
        currentPokemon: [
          {
            name: "Charmander",
            image: "",
          },
          {
            name: "Bulbasaur",
            image: "",
          },
        ],
      };

      const action = loadPokemonActionsCreator(pokemon.currentPokemon);
      const newPokemon = pokemonReducer(pokemon, action);
      expect(newPokemon).toStrictEqual(pokemon);
    });
  });

  describe("When it receives a list of Pokemon and an unknown action", () => {
    test("Then it should return the same list of Pokemon", () => {
      const unknownAction: Action = {
        type: PokemonActionType.unknownAction,
      };

      const currentPokemon: CurrentPokemonState = { currentPokemon: [] };

      const resultPokemon = pokemonReducer(currentPokemon, unknownAction);

      expect(resultPokemon).toStrictEqual(currentPokemon);
    });
  });
});
