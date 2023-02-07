import { PokemonData, PokemonStats } from "../../../hooks/types";
import {
  loadFavouritePokemonActionsCreator,
  loadPokemonDetailsActionsCreator,
  loadPokemonActionsCreator,
  deleteFavouritePokemonActionsCreator,
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
    test("Then it should return an action having a property payload with the received Pokemon and a property type with the load Pokemon action", () => {
      const returns = loadPokemonActionsCreator(pokemon);

      expect(returns).toHaveProperty("type", PokemonActionType.loadPokemon);
      expect(returns).toHaveProperty("payload", pokemon);
    });
  });

  describe("When it's function loadPokemonDetailsActionCreator receives a Pokemon named 'Charmander'", () => {
    test("Then it should return an action having a property payload with the received Pokemon and a property type with the load Pokemon action", () => {
      const returns = loadPokemonDetailsActionsCreator(pokemonDetail);

      expect(returns).toHaveProperty(
        "type",
        PokemonActionType.loadDetailedPokemon
      );
      expect(returns).toHaveProperty("payload", pokemonDetail);
    });
  });

  describe("When it's function loadFavouritePokemonActionsCreator receives a Pokemon named 'Charmander'", () => {
    test("Then it should return an action having a property payload with the received Pokemon and a property type with the load Pokemon action", () => {
      const returns = loadFavouritePokemonActionsCreator([pokemonDetail]);

      expect(returns).toHaveProperty(
        "type",
        PokemonActionType.loadFavouritePokemon
      );
      expect(returns).toHaveProperty("payload", [pokemonDetail]);
    });
  });

  describe("When it's function deleteFavouritePokemonActionsCreator receives a Pokemon named 'Charmander'", () => {
    test("Then it should return an action having a property payload with the received Pokemon id and a property type with the delete Pokemon action", () => {
      const returns = deleteFavouritePokemonActionsCreator(pokemonDetail.id);

      expect(returns).toHaveProperty(
        "type",
        PokemonActionType.deleteFavouritePokemon
      );
      expect(returns).toHaveProperty("payload", pokemonDetail.id);
    });
  });
});
