import { PokemonContextStructure } from "./types";
import { createContext } from "react";

const PokemonContext = createContext<PokemonContextStructure>(
  {} as PokemonContextStructure
);

export default PokemonContext;
