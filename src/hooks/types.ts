export interface PokemonName {
  results: [{ name: string }];
}

export interface PokemonData {
  name: string;
  image: string;
}

export interface PokemonDetail extends PokemonData {
  abilities: [{ ability: { name: string } }, { ability: { name: string } }];
  height: number;
  id: number;
  types: [{ type: { name: string } }];
}

export interface PokemonStats extends PokemonData {
  abilities: { abilityOne: string; abilityTwo: string };
  height: number;
  id: number;
  types: string;
}
