import { PokemonData, PokemonName, PokemonStats } from "../../hooks/types";

export const mockPokemonResponse: PokemonData[] = [
  {
    name: "Charmander",
    image: "",
  },
  {
    name: "Bulbasaur",
    image: "",
  },
];

export const mockPokemonDetail: PokemonStats = {
  name: "Charmander",
  image: "",
  abilities: { abilityOne: "fire", abilityTwo: "fireTwo" },
  height: 0,
  id: 0,
  types: "fire",
};

export const mockPokemonResponseRaw: PokemonName = {
  results: [
    {
      name: "Charmander",
    },
  ],
};
