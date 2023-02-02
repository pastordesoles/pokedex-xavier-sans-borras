import { PokemonData, PokemonDetail, PokemonStats } from "../../../hooks/types";
import {
  loadPokemonActionsCreator,
  loadPokemonDetailsActionsCreator,
} from "./pokemonActionCreators";
import PokemonActionType from "./pokemonActionTypes";

describe("Given a pokemonActionsCreators", () => {
  const pokemon: PokemonData[] = [
    {
      name: "Charmander",
      image: "",
    },
  ];

  const pokemonDetail: PokemonStats = {
    name: "Charmander",
    image: "",
    abilities: { abilityOne: "fire", abilityTwo: "fireTwo" },
    height: 0,
    id: 0,
    types: "fire",
  };

  describe("When it's function loadPokemonActionCreator receives a Pokemon named 'Charmander'", () => {
    test("Then it should return an action having a property payload with the received Pokemon and a property type with with the load Pokemon action", () => {
      const returns = loadPokemonActionsCreator(pokemon);

      expect(returns).toHaveProperty("type", PokemonActionType.loadPokemon);
      expect(returns).toHaveProperty("payload", pokemon);
    });
  });

  describe("When it's function loadPokemonDetailsActionCreator receives a Pokemon named 'Charmander'", () => {
    test("Then it should return an action having a property payload with the received Pokemon and a property type with with the load Pokemon action", () => {
      const returns = loadPokemonDetailsActionsCreator(pokemonDetail);

      expect(returns).toHaveProperty(
        "type",
        PokemonActionType.loadDetailedPokemon
      );
      expect(returns).toHaveProperty("payload", pokemonDetail);
    });
  });
});
