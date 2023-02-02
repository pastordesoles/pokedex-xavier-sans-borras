import {
  PokemonData,
  PokemonDetail,
  PokemonName,
  PokemonStats,
} from "../../hooks/types";

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

export const mockPokemonDetailRaw: PokemonDetail = {
  abilities: [{ ability: { name: "fire" } }, { ability: { name: "fire" } }],
  height: 2,
  id: 1,
  image: "",
  name: "pikachu",
  types: [{ type: { name: "fire" } }],
};

export const mockPokemonDetailUndefinedRaw = {
  abilities: [{ ability: { name: "fire" } }],
  height: 2,
  id: 1,
  image: "",
  name: "pikachu",
  types: [{ type: { name: "fire" } }],
};
