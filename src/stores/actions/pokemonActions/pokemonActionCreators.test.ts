import { PokemonData } from "../../../hooks/types";
import { loadPokemonActionsCreator } from "./pokemonActionCreators";
import PokemonActionType from "./pokemonActionTypes";

describe("Given a pokemonActionsCreators", () => {
  const pokemon: PokemonData[] = [
    {
      name: "Charmander",
      image: "",
    },
  ];
  describe("When it's function loadPokemonActionCreator receives a Pokemon named 'Charmander'", () => {
    test("Then it should return an action having a property payload with the received Pokemon and a property type with with the load Pokemon action", () => {
      const returns = loadPokemonActionsCreator(pokemon);

      expect(returns).toHaveProperty("type", PokemonActionType.loadPokemon);
      expect(returns).toHaveProperty("payload", pokemon);
    });
  });
});
