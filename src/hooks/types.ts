export interface PokemonName {
  results: [{ name: string }];
}

export interface PokemonData {
  name: string;
  image: string;
}

export interface PokemonDetail extends PokemonData {
  abilities: [];
  height: number;
  id: number;
}
