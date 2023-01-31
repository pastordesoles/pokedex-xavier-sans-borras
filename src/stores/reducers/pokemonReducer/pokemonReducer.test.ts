import { PokemonData } from "../../../hooks/types";
import { Action } from "../../actions/pokemonActions/actions";
import { loadPokemonActionsCreator } from "../../actions/pokemonActions/pokemonActionCreators";
import PokemonActionType from "../../actions/pokemonActions/pokemonActionTypes";
import pokemonReducer from "./pokemonReducer";

describe("Given a pokemonReducer", () => {
  describe("When it receives a list of Pokemon and the action loadPokemon", () => {
    test("Then it should return a list of Pokemon", () => {
      const pokemon: PokemonData[] = [
        {
          name: "Charmander",
          image: "",
        },
        {
          name: "Bulbasaur",
          image: "",
        },
      ];
      const action = loadPokemonActionsCreator(pokemon);
      const newPokemon = pokemonReducer([], action);
      expect(newPokemon).toStrictEqual(pokemon);
    });
  });

  describe("When it receives a list of Pokemon and an unknown action", () => {
    test("Then it should return the same list of Pokemon", () => {
      const unknownAction: Action = {
        type: PokemonActionType.unknownAction,
      };

      const currentPokemon: PokemonData[] = [];

      const resultPokemon = pokemonReducer(currentPokemon, unknownAction);

      expect(resultPokemon).toStrictEqual(currentPokemon);
    });
  });
});
